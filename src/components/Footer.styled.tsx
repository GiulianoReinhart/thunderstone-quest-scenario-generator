import {styled} from 'styled-components'

export const StyledFooter = styled.i`
  position: fixed;
  bottom: 5rem;
  right: 7rem;
  border-radius: 3rem;
  font-size: 2rem;
  height: 4rem;
  width: 4rem;

  @media (max-width: 750px) {
    bottom: 3rem;
    right: 3rem;
  }
`
