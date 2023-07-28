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

  #button-container {
    position: relative;

    .warning {
      position: absolute;
      bottom: -0.5rem;
      transform: translateY(100%);
      width: 100%;
      text-align: center;
      font-size: 2rem;
      color: #d79999;
    }
  }
`
