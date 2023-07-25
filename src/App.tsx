import {Dispatch, MouseEvent, useEffect, useState} from 'react'
import {Hero, heroes} from './data/heroes'
import {Item, items} from './data/items'
import {Monster, MonsterGroups, monsterGroups} from './data/monsterGroups'
import {packs} from './data/packs'
import {Room} from './data/rooms'
import {Spell, spells} from './data/spells'
import {Weapon, weapons} from './data/weapons'

const App = () => {
  const [activeMonsterGroups, setActiveMonsterGroups] = useState<MonsterGroups | null>(null)
  const [activePacks, setActivePacks] = useState(Object.keys(packs))

  const [fittingRooms, setFittingRooms] = useState<Room[] | null>(null)
  const [fittingHeroes, setFittingHeroes] = useState<Hero[] | null>(null)
  const [fittingWeapons, setFittingWeapons] = useState<Weapon[] | null>(null)
  const [fittingItems, setFittingItems] = useState<Item[] | null>(null)
  const [fittingSpells, setFittingSpells] = useState<Spell[] | null>(null)

  const [generatedMonsterGroups, setGeneratedMonsterGroups] = useState<Monster[] | null>(null)
  const [generatedRooms, setGeneratedRooms] = useState<Room[] | null>(null)

  useEffect(() => {
    setActiveMonsterGroups(monsterGroups)
  }, [])

  useEffect(() => {
    console.log('Heroes:', fittingHeroes)
    console.log('Weapons:', fittingWeapons)
    console.log('Items:', fittingItems)
    console.log('Spells:', fittingSpells)
  }, [fittingHeroes, fittingWeapons, fittingItems, fittingSpells])

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

  const generate = () => {
    setFittingRooms(null)
    setFittingHeroes(null)
    setFittingWeapons(null)
    setFittingItems(null)
    setFittingSpells(null)

    setGeneratedMonsterGroups(null)
    setGeneratedRooms(null)
    // setGeneratedHeroes(null)
    // setGeneratedWeapons(null)
    // setGeneratedItems(null)
    // setGeneratedSpells(null)

    // Generate Monster Groups and add fitting Heroes, Weapons, Items and Spells to their respective arrays
    const pickedMonsterGroups = Object.keys(monsterGroups).map(level => {
      const shortList = monsterGroups[Number(level)].filter(monster => activePacks.includes(monster.pack.toString()))

      const pickedMonsterGroup = shortList[Math.floor(Math.random() * shortList.length)]

      // Add Rooms that fit to Monster Group to fittingRooms array
      // setFittingRooms(prevState => {})

      // Add Heroes who fit to Monster Group to fittingHeroes array
      if (typeof pickedMonsterGroup.heroes === 'string') {
        const filteredHeroes = heroes.filter(hero => hero.attack === pickedMonsterGroup.heroes)

        setFittingHeroes(prevState => (prevState ? [...prevState, ...filteredHeroes] : filteredHeroes))
      } else {
        pickedMonsterGroup.heroes.forEach(hero => {
          const foundHero = heroes.find(heroObject => heroObject.name === hero)

          foundHero && setFittingHeroes(prevState => (prevState ? [...prevState, foundHero] : [foundHero]))
        })
      }

      const pickMarketCards = (
        cardType: 'weapons' | 'items' | 'spells',
        cardArray: Weapon[] | Item[] | Spell[],
        setStateFunction: Dispatch<React.SetStateAction<Weapon[] | Item[] | Spell[] | null>>
      ) => {
        pickedMonsterGroup[cardType].forEach(element => {
          const foundElement = cardArray.find(cardObject => cardObject.name === element)

          foundElement && setStateFunction(prevState => (prevState ? [...prevState, foundElement] : [foundElement]))
        })
      }

      // Add Weapons that fit to Monster Group to fittingWeapons array
      pickMarketCards('weapons', weapons, setFittingWeapons)
      /* pickedMonsterGroup.weapons.forEach(weapon => {
        const foundWeapon = weapons.find(weaponObject => weaponObject.name === weapon)

        foundWeapon && setFittingWeapons(prevState => (prevState ? [...prevState, foundWeapon] : [foundWeapon]))
      }) */

      // Add Items that fit to Monster Group to fittingItems array
      pickMarketCards('items', items, setFittingItems)
      /* pickedMonsterGroup.items.forEach(item => {
        const foundItem = items.find(itemObject => itemObject.name === item)

        foundItem && setFittingItems(prevState => (prevState ? [...prevState, foundItem] : [foundItem]))
      }) */

      // Add Spells that fit to Monster Group to fittingSpells array
      pickMarketCards('spells', spells, setFittingSpells)
      /* pickedMonsterGroup.spells.forEach(spell => {
        const foundSpell = spells.find(spellObject => spellObject.name === spell)

        foundSpell && setFittingItems(prevState => (prevState ? [...prevState, foundSpell] : [foundSpell]))
      }) */

      return pickedMonsterGroup
    })

    setGeneratedMonsterGroups(pickedMonsterGroups)
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
      <h2>Generated Monsters</h2>
      {generatedMonsterGroups?.map((monsterGroup, index) => (
        <li key={monsterGroup.name}>
          Level {index + 1}: {monsterGroup.name}
        </li>
      ))}
    </div>
  )
}

export default App
