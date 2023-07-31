import {AnimatePresence} from 'framer-motion'
import {useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import {GeneratedHeroes} from './data/heroes'
import {packs} from './data/packs'
import Generator from './pages/Generator'
import {Result} from './pages/Result'

export type GeneratedData = {
  monsterGroups: string[] | null
  rooms: {
    [key: number]: string[]
  } | null
  heroes: GeneratedHeroes | null
  weapons: string[] | null
  items: string[] | null
  spells: string[] | null
  guardian: {name: string; level: number} | null
}

const App = () => {
  const [activePacks, setActivePacks] = useState(Object.keys(packs))
  const [generatedData, setGeneratedData] = useState<GeneratedData | null>(null)
  const location = useLocation()

  // useEffect(() => console.log(generatedData), [generatedData])

  return (
    <>
      <Nav activePacks={activePacks} setActivePacks={setActivePacks} setGeneratedData={setGeneratedData} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Generator activePacks={activePacks} setGeneratedData={setGeneratedData} />} />
          <Route path="/result" element={<Result generatedData={generatedData} />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
