import {MouseEvent, useEffect, useState} from 'react'
import {Hero} from './data/heroes'
import {Monster, MonsterGroups, monsterGroups} from './data/monsterGroups'
import {packs} from './data/packs'

const App = () => {
  const [activeMonsterGroups, setActiveMonsterGroups] = useState<MonsterGroups | null>(null)
  const [activePacks, setActivePacks] = useState(Object.keys(packs))

  const [fittingHeroes, setFittingHeroes] = useState<Hero[] | null>(null)

  const [generatedMonsterGroups, setGeneratedMonsterGroups] = useState<Monster[] | null>(null)
  useEffect(() => console.log(generatedMonsterGroups), [generatedMonsterGroups])
  useEffect(() => {
    setActiveMonsterGroups(monsterGroups)
  }, [])

  /* useEffect(() => {
    setActiveMonsterGroups(() => {
      for (const level in monsterGroups) {
        newMonsterList += monsterGroups[level].filter((monster: Monster) => activePacks.includes(monster.pack))
      }
    })
  }, [activePacks]) */

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
    setGeneratedMonsterGroups(() =>
      Object.keys(monsterGroups).map(level => {
        const shortList = monsterGroups[Number(level)].filter(monster => activePacks.includes(monster.pack.toString()))

        const pickedMonsterGroup = shortList[Math.floor(Math.random() * shortList.length)]

        return pickedMonsterGroup
      })
    )
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
    </div>
  )
}

export default App
