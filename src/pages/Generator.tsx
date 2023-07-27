import {motion} from 'framer-motion'
import {Dispatch} from 'react'
import {useNavigate} from 'react-router-dom'
import {GeneratedData} from '../App'
import {Guardian, guardians} from '../data/guardians'
import {GeneratedHeroes, Hero, PickedHeroes, heroes} from '../data/heroes'
import {Item, items} from '../data/items'
import {Monster, monsterGroups} from '../data/monsterGroups'
import {rooms} from '../data/rooms'
import {Spell, spells} from '../data/spells'
import {Weapon, weapons} from '../data/weapons'
import {StyledGenerator} from './Generator.styled'

type Props = {
  activePacks: string[]
  setGeneratedData: Dispatch<React.SetStateAction<GeneratedData | null>>
}

const Generator = ({activePacks, setGeneratedData}: Props) => {
  const navigate = useNavigate()

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
    setGeneratedData({
      monsterGroups: null,
      rooms: null,
      heroes: null,
      weapons: null,
      items: null,
      spells: null,
      guardian: null
    })

    const fittingHeroes: Hero[] = []
    const fittingWeapons: Weapon[] = []
    const fittingItems: Item[] = []
    const fittingSpells: Spell[] = []
    let fittingGuardians: Guardian[] = []

    // Generate Monster Groups and add fitting Heroes, Weapons, Items and Spells to their respective arrays
    const pickedMonsterGroups = Object.keys(monsterGroups).map(level => {
      const shortList = monsterGroups[Number(level)].filter(monster => activePacks.includes(monster.pack.toString()))

      const pickedMonsterGroup = shortList[Math.floor(Math.random() * shortList.length)]

      // Add Rooms that fit to Monster Group to fittingRooms array
      setGeneratedData(prevState => {
        let pickedRooms = rooms[Number(level)].filter(room => room.pack === pickedMonsterGroup.pack)

        if (pickedRooms.length < 2) {
          const remainingRooms = rooms[Number(level)].filter(
            room => room.name !== pickedRooms[0].name && activePacks.includes(room.pack.toString())
          )

          pickedRooms = [...pickedRooms, remainingRooms[Math.floor(Math.random() * remainingRooms.length)]]
        }

        pickedRooms.sort(() => 0.5 - Math.random())

        return (
          prevState && {...prevState, rooms: {...prevState.rooms, [Number(level)]: pickedRooms.map(room => room.name)}}
        )
      })

      // Add Heroes who fit to Monster Group to fittingHeroes array
      if (typeof pickedMonsterGroup.heroes === 'string') {
        const filteredHeroes = heroes.filter(hero => hero.attack === pickedMonsterGroup.heroes)

        fittingHeroes?.push(...filteredHeroes)
      } else {
        pickedMonsterGroup.heroes.forEach(hero => {
          const foundHero = heroes.find(heroObject => heroObject.name === hero)

          foundHero && fittingHeroes?.push(foundHero)
        })
      }

      // Add Weapons, Items and Spells that fit to Monster Group to their respective arrays
      pickMarketCards(pickedMonsterGroup, 'weapons', weapons, fittingWeapons)
      pickMarketCards(pickedMonsterGroup, 'items', items, fittingItems)
      pickMarketCards(pickedMonsterGroup, 'spells', spells, fittingSpells)

      return pickedMonsterGroup.name
    })

    setGeneratedData(prevState => prevState && {...prevState, monsterGroups: [...pickedMonsterGroups]})

    // Generate Heroes and add fitting Weapons, Items and Spells to their respective arrays
    const heroClasses = ['Cleric', 'Rogue', 'Wizard', 'Fighter']

    let pickedHeroes: PickedHeroes = {}

    do {
      pickedHeroes = {}

      let allHeroes = heroes.filter(hero => activePacks.includes(hero.pack.toString()))

      let tempFittingHeroes = fittingHeroes.filter(hero => activePacks.includes(hero.pack.toString()))

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

    let generatedHeroNames: GeneratedHeroes = {}

    Object.keys(pickedHeroes).forEach(
      heroClass => (generatedHeroNames = {...generatedHeroNames, [heroClass]: pickedHeroes[heroClass].name})
    )

    setGeneratedData(prevState => prevState && {...prevState, heroes: generatedHeroNames})

    // Generate Weapons
    const generateMarketCards = (
      fullCardList: (Weapon | Item | Spell)[],
      cardType: 'weapon' | 'item' | 'spell',
      fittingCards: (Weapon | Item | Spell)[]
    ) => {
      fittingCards = fittingCards.filter(card => activePacks.includes(card.pack.toString()))

      let pickedCards: string[]

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

          pickedCards = [...pickedCards, pickedCard.name]
        }
      } while (pickedCards.length < (cardType === 'item' ? 2 : 3))

      return pickedCards
    }

    setGeneratedData(
      prevState =>
        prevState && {
          ...prevState,
          weapons: generateMarketCards(weapons, 'weapon', fittingWeapons),
          items: generateMarketCards(items, 'item', fittingItems),
          spells: generateMarketCards(spells, 'spell', fittingSpells)
        }
    )

    // Generate Guardian
    const heroPack: number[] = []

    Object.keys(pickedHeroes).forEach(
      heroClass => !heroPack.includes(pickedHeroes[heroClass].pack) && heroPack.push(pickedHeroes[heroClass].pack)
    )

    fittingGuardians = guardians.filter(guardian => heroPack.includes(guardian.pack))

    setGeneratedData(
      prevState =>
        prevState && {
          ...prevState,
          guardian: {
            name: fittingGuardians[Math.floor(Math.random() * fittingGuardians.length)].name,
            level: Math.floor(Math.random() * (6 - 4 + 1)) + 4
          }
        }
    )

    navigate('/result')
  }

  return (
    <motion.main
      id="generator-main"
      transition={{duration: 0.4}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <StyledGenerator>
        <p>Pick your expansion packs and click on the button below to generate a scenario.</p>
        <button
          id="generate"
          disabled={!activePacks.length || (activePacks.length === 1 && activePacks.includes('5'))}
          onClick={generate}
        >
          Generate Scenario
        </button>
        {!activePacks.length && <p style={{color: 'red'}}>Choose at least one pack.</p>}
        {activePacks.length === 1 && activePacks.includes('5') && (
          <p style={{color: 'red'}}>Pack 5 can’t be picked on its own.</p>
        )}
      </StyledGenerator>
    </motion.main>
  )
}

export default Generator