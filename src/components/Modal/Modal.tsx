import {AnimatePresence, motion} from 'framer-motion'
import {Dispatch, ReactNode, SetStateAction} from 'react'
import ReactDom from 'react-dom'
import {StyledModal} from './Modal.styled'

type Props = {
  children: ReactNode
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({children, modalOpen, setModalOpen}: Props) => {
  const AnimatedStyledModal = motion(StyledModal)

  return ReactDom.createPortal(
    <AnimatePresence>
      {modalOpen && (
        <AnimatedStyledModal initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <button onClick={() => setModalOpen(false)} />
          <div id="content-box">{children}</div>
        </AnimatedStyledModal>
      )}
    </AnimatePresence>,
    document.getElementById('modal-container')!
  )
}

export default Modal
