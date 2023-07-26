import {ReactComponent as Logo} from '../img/logo.svg'
import packIcons from '../img/packs/packIcons'
import {StyledNav} from './Nav.styled'

export const Nav = () => {
  return (
    <StyledNav>
      <Logo fill="white" />
      <div id="packs">
        {Object.keys(packIcons).map(key => (
          <img key={packIcons[key as keyof typeof packIcons]} src={packIcons[key as keyof typeof packIcons]} />
        ))}
      </div>
    </StyledNav>
  )
}
