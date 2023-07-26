import {AnimatePresence, motion} from 'framer-motion'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import './fonts/fonts.css'
import Generator from './pages/Generator.tsx'
import {Result} from './pages/Result.tsx'
import GlobalStyle from './style/GlobalStyle'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Generator />},
      {path: 'result', element: <Result />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <AnimatePresence>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <RouterProvider router={router} />
      </motion.div>
    </AnimatePresence>
  </>
)
