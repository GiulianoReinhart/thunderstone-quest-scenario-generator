import {MouseEvent, useState} from 'react'
import {Guardian, guardians} from './data/guardians'
import {Hero, heroes} from './data/heroes'
import {Item, items} from './data/items'
import {Monster, monsterGroups} from './data/monsterGroups'
import {packs} from './data/packs'
import {Rooms, rooms} from './data/rooms'
import {Spell, spells} from './data/spells'
import {Weapon, weapons} from './data/weapons'

type GeneratedHeroes = {
  [key: string]: Hero
}

const App = () => {
  const [activePacks, setActivePacks] = useState(Object.keys(packs))
  const [generatedMonsterGroups, setGeneratedMonsterGroups] = useState<Monster[] | null>(null)
  const [generatedRooms, setGeneratedRooms] = useState<Rooms | null>(null)
  const [generatedHeroes, setGeneratedHeroes] = useState<GeneratedHeroes | null>(null)
  const [generatedWeapons, setGeneratedWeapons] = useState<Weapon[] | null>(null)
  const [generatedItems, setGeneratedItems] = useState<Item[] | null>(null)
  const [generatedSpells, setGeneratedSpells] = useState<Spell[] | null>(null)
  const [generatedGuardian, setGeneratedGuardian] = useState<Guardian | null>(null)

  const packHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const targetPack: string = (e.target as HTMLButtonElement).value

    setActivePacks(prevState => {
      if (prevState.includes(targetPack)) {
        return prevState.filter(pack => pack !== targetPack)
      } else {
        return [...prevState, targetPack].sort()
      }
    })
  }

  const pickMarketCards = (
    referenceType: Monster | Hero,
    cardType: 'weapons' | 'items' | 'spells',
    cardArray: (Weapon | Item | Spell)[],
    fittingArray: (Hero | Weapon | Item | Spell)[]
  ) => {
    referenceType[cardType].forEach(element => {
      const foundElement = cardArray.find(cardObject => cardObject.name === element)

      foundElement && fittingArray.push(foundElement)
    })
  }

  const generate = () => {
    const fittingHeroes: Hero[] = []
    const fittingWeapons: Weapon[] = []
    const fittingItems: Item[] = []
    const fittingSpells: Spell[] = []
    let fittingGuardians: Guardian[] = []

    setGeneratedMonsterGroups(null)
    setGeneratedRooms(null)
    setGeneratedHeroes(null)
    setGeneratedWeapons(null)
    setGeneratedItems(null)
    setGeneratedSpells(null)

    // Generate Monster Groups and add fitting Heroes, Weapons, Items and Spells to their respective arrays
    const pickedMonsterGroups = Object.keys(monsterGroups).map(level => {
      const shortList = monsterGroups[Number(level)].filter(monster => activePacks.includes(monster.pack.toString()))

      const pickedMonsterGroup = shortList[Math.floor(Math.random() * shortList.length)]

      // Add Rooms that fit to Monster Group to fittingRooms array
      setGeneratedRooms(prevState => {
        let pickedRooms = rooms[Number(level)].filter(room => room.pack === pickedMonsterGroup.pack)

        if (pickedRooms.length < 2) {
          const remainingRooms = rooms[Number(level)].filter(room => room.name !== pickedRooms[0].name)

          pickedRooms = [...pickedRooms, remainingRooms[Math.floor(Math.random() * remainingRooms.length)]]
        }

        pickedRooms.sort(() => 0.5 - Math.random())

        return prevState ? {...prevState, [Number(level)]: pickedRooms} : {[Number(level)]: pickedRooms}
      })

      // Add Heroes who fit to Monster Group to fittingHeroes array
      if (typeof pickedMonsterGroup.heroes === 'string') {
        const filteredHeroes = heroes.filter(hero => hero.attack === pickedMonsterGroup.heroes)

        fittingHeroes?.push(...filteredHeroes)

        // setFittingHeroes(prevState => (prevState ? [...prevState, ...filteredHeroes] : filteredHeroes))
      } else {
        pickedMonsterGroup.heroes.forEach(hero => {
          const foundHero = heroes.find(heroObject => heroObject.name === hero)

          foundHero && fittingHeroes?.push(foundHero)

          // foundHero && setFittingHeroes(prevState => (prevState ? [...prevState, foundHero] : [foundHero]))
        })
      }

      // Add Weapons, Items and Spells that fit to Monster Group to their respective arrays
      pickMarketCards(pickedMonsterGroup, 'weapons', weapons, fittingWeapons)
      pickMarketCards(pickedMonsterGroup, 'items', items, fittingItems)
      pickMarketCards(pickedMonsterGroup, 'spells', spells, fittingSpells)

      return pickedMonsterGroup
    })

    setGeneratedMonsterGroups(pickedMonsterGroups)

    // Generate Heroes and add fitting Weapons, Items and Spells to their respective arrays
    const heroClasses = ['Cleric', 'Rogue', 'Wizard', 'Fighter']

    let pickedHeroes: GeneratedHeroes = {}

    do {
      pickedHeroes = {}

      let allHeroes = heroes.filter(hero => activePacks.includes(hero.pack.toString()))

      let tempFittingHeroes = fittingHeroes

      heroClasses
        .sort(() => 0.5 - Math.random())
        .every(heroClass => {
          let filteredHeroes: Hero[] = []

          // If there are fitting Heroes, filter by current Class
          if (tempFittingHeroes.length) {
            filteredHeroes = tempFittingHeroes.filter(hero => hero.class.includes(heroClass))
          }

          // If there aren't fitting Heroes before or after filtering by current Class
          if (!filteredHeroes.length) {
            filteredHeroes = allHeroes.filter(hero => hero.class.includes(heroClass))
          }

          if (!filteredHeroes.length) {
            return false
          }

          const pickedHero = filteredHeroes[Math.floor(Math.random() * filteredHeroes.length)]

          tempFittingHeroes = tempFittingHeroes.filter(hero => hero.name !== pickedHero.name)
          allHeroes = allHeroes.filter(hero => hero.name !== pickedHero.name)

          // Add Weapons, Items and Spells that fit to Hero to their respective arrays
          pickMarketCards(pickedHero, 'weapons', weapons, fittingWeapons)
          pickMarketCards(pickedHero, 'items', items, fittingItems)
          pickMarketCards(pickedHero, 'spells', spells, fittingSpells)

          pickedHeroes = {...pickedHeroes, [heroClass]: pickedHero}

          return true
        })
    } while (Object.keys(pickedHeroes).length < 4)

    setGeneratedHeroes(pickedHeroes)

    // Generate Weapons
    const generateMarketCards = (
      fullCardList: (Weapon | Item | Spell)[],
      cardType: 'weapon' | 'item' | 'spell',
      fittingCards: (Weapon | Item | Spell)[]
    ) => {
      fittingCards = fittingCards.filter(card => activePacks.includes(card.pack.toString()))

      let pickedCards: (Weapon | Item | Spell)[]

      do {
        pickedCards = []

        let allCards = fullCardList.filter(card => activePacks.includes(card.pack.toString()))

        let tempFittingCards = fittingCards

        while (pickedCards.length < (cardType === 'item' ? 2 : 3)) {
          let filteredCards: (Weapon | Item | Spell)[] = []

          if (tempFittingCards.length) {
            filteredCards = tempFittingCards
          } else {
            filteredCards = allCards
          }

          if (!filteredCards.length) {
            break
          }

          const pickedCard = filteredCards[Math.floor(Math.random() * filteredCards.length)]

          tempFittingCards = tempFittingCards.filter(weapon => weapon.name !== pickedCard.name)
          allCards = allCards.filter(card => card.name !== pickedCard.name)

          pickedCards = [...pickedCards, pickedCard]
        }
      } while (pickedCards.length < (cardType === 'item' ? 2 : 3))

      return pickedCards
    }

    setGeneratedWeapons(generateMarketCards(weapons, 'weapon', fittingWeapons))
    setGeneratedItems(generateMarketCards(items, 'item', fittingItems))
    setGeneratedSpells(generateMarketCards(spells, 'spell', fittingSpells))

    // Generate Guardian
    const heroPack: number[] = []

    Object.keys(pickedHeroes).forEach(
      heroClass => !heroPack.includes(pickedHeroes[heroClass].pack) && heroPack.push(pickedHeroes[heroClass].pack)
    )

    console.log(heroPack)

    fittingGuardians = guardians.filter(guardian => heroPack.includes(guardian.pack))

    setGeneratedGuardian(fittingGuardians[Math.floor(Math.random() * fittingGuardians.length)])
  }

  return (
    <div>
      {Object.keys(packs).map(pack => (
        <button
          style={activePacks.includes(pack) ? {backgroundColor: '#baebba'} : undefined}
          onClick={packHandler}
          value={pack.toString()}
          key={pack}
        >
          Pack {pack}
        </button>
      ))}
      <button disabled={!activePacks.length} onClick={generate}>
        Generate Scenario
      </button>
      <h2>Generated Rooms</h2>
      {generatedRooms &&
        Object.keys(generatedRooms).map(level => (
          <ul key={generatedRooms[Number(level)][0].name}>
            <li>
              Level {level}: {generatedRooms[Number(level)][0].name}
            </li>
            <li>
              Level {level}: {generatedRooms[Number(level)][1].name}
            </li>
          </ul>
        ))}
      <h2>Generated Monsters</h2>
      {generatedMonsterGroups?.map((monsterGroup, index) => (
        <ul key={monsterGroup.name}>
          <li>
            Level {index + 1}: {monsterGroup.name}
          </li>
        </ul>
      ))}
      <h2>Generated Heroes</h2>
      {generatedHeroes &&
        Object.keys(generatedHeroes).map(heroClass => (
          <ul key={generatedHeroes[heroClass].name}>
            <li>
              {heroClass}: {generatedHeroes[heroClass].name}
            </li>
          </ul>
        ))}
      <h2>Generated Weapons</h2>
      <ul>
        {generatedWeapons?.map(weapon => (
          <li key={weapon.name}>{weapon.name}</li>
        ))}
      </ul>
      <h2>Generated Items</h2>
      <ul>
        {generatedItems?.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <h2>Generated Spells</h2>
      <ul>
        {generatedSpells?.map(spell => (
          <li key={spell.name}>{spell.name}</li>
        ))}
      </ul>
      <h2>Generated Guardian</h2>
      <ul>
        <li>{generatedGuardian?.name}</li>
      </ul>
    </div>
  )
}

export default App
