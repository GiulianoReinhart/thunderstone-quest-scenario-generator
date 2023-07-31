import {useState} from 'react'
import Modal from '../Modal/Modal'
import {StyledFooter} from './Footer.styled'

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const clickHandler = () => {
    setModalOpen(true)
  }

  return (
    <StyledFooter>
      <i onClick={clickHandler}>i</i>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <h2>Found a bug?</h2>
        <p>
          It would be amazing if you could write me on{' '}
          <a href="https://www.reddit.com/user/bragae" target="_blank">
            Reddit
          </a>{' '}
          or send me an <a href="mailto:bragaeagarb@gmail.com">e-mail</a> if you encounter anything that seems to be
          weird or a flat-out error! ❤️
        </p>
        <h2>How does it work?</h2>
        <p>
          First, the Monster Groups are picked entirely at random. Heroes, Weapons, Items, and Spells that synergise
          with the picked Monster Groups will be added to a shortlist from which most of the cards for the generated
          scenario will be picked.
        </p>
        <p>
          Next, four Heroes will be picked from the Hero shortlist based on the picked Monster Groups. For balance and
          to diversify the generated scenarios, there is a small chance for each Hero to be picked entirely at random.
          If there are Weapons, Items or Spells that synergise with any of the picked Heroes, they will be added to the
          before mentioned shortlist as well.
        </p>
        <p>
          One Weapon, Item, and Spell will be picked entirely randomly from all existing cards (of your chosen expansion
          packs). This happens, as with the Heroes before, to generate more diverse scenarios. The remaining cards are
          picked randomly from their respective shortlists.
        </p>
        <p>The picked Guardian will come from one of the picked Heroes’ expansion packs.</p>
        <p>
          The Dungeon Rooms will be picked based on the expansion pack of the Monster Group of the respective level.
        </p>
        <h2>Disclaimer</h2>
        <p>
          I do not own the used expansion pack icons or any other used content of Thunderstone Quest. All credits go to
          its rightful owner (Alderac Entertainment Group).
        </p>
      </Modal>
    </StyledFooter>
  )
}

export default Footer
