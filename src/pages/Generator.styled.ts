import {styled} from 'styled-components'

export const StyledGenerator = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  text-align: center;

  #generate {
    &:disabled {
      opacity: 0.2;
    }
  }
`
