import {AnimatePresence, motion} from 'framer-motion'
import {Dispatch, MouseEvent} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {GeneratedData} from '../../App'
import {packs} from '../../data/packs'
import Logo from '../../img/logo.svg?react'
import packIcons from '../../img/packs/packIcons'
import {StyledNav} from './Nav.styled'

type Props = {
  activePacks: string[]
  setActivePacks: Dispatch<React.SetStateAction<string[]>>
  setGeneratedData: Dispatch<React.SetStateAction<GeneratedData | null>>
}

const Nav = ({activePacks, setActivePacks, setGeneratedData}: Props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const packHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const targetPack: string = (e.target as HTMLButtonElement).value

    setActivePacks(prevState => {
      if (prevState.includes(targetPack)) {
        return prevState.filter(pack => pack !== targetPack)
      } else {
        return [...prevState, targetPack].sort()
      }
    })
  }

  const restartHandler = () => {
    setGeneratedData({
      monsterGroups: null,
      rooms: null,
      heroes: null,
      weapons: null,
      items: null,
      spells: null,
      guardian: null
    })

    navigate('/')
  }

  return (
    <StyledNav>
      <Logo fill="white" />
      <AnimatePresence mode="wait" initial={false}>
        {location.pathname === '/' ? (
          <motion.div
            id="packs"
            key="packs"
            transition={{duration: 0.4}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            {Object.keys(packIcons).map((key, index) => (
              <button
                className={activePacks.includes(index.toString()) ? 'active' : ''}
                value={index}
                onClick={packHandler}
                key={packIcons[key as keyof typeof packIcons]}
                data-content={Object.keys(packIcons)[index]}
                disabled={!Object.keys(packs).includes(index.toString())}
              >
                <img src={packIcons[key as keyof typeof packIcons]} />
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.button
            key="restart"
            transition={{duration: 0.4}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={restartHandler}
          >
            Restart
          </motion.button>
        )}
      </AnimatePresence>
    </StyledNav>
  )
}

export default Nav
