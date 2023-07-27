import {Dispatch} from 'react'
import {useOutletContext} from 'react-router-dom'
import {GeneratedData} from '../App'

type ContextType = {
  activePacks: string[]
  setActivePacks: Dispatch<React.SetStateAction<string[]>>
  generatedData: GeneratedData
  setGeneratedData: Dispatch<React.SetStateAction<GeneratedData>>
}

export const useCustomOutletContext = () => {
  return useOutletContext<ContextType>()
}
