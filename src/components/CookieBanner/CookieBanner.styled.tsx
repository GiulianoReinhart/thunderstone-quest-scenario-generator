import {styled} from 'styled-components'

export const StyledCookieBanner = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100%;
    background-color: rgba(49, 41, 33, 0.8);

    > div {
      background-color: white;
      overflow-y: auto;
      max-height: calc(100dvh - 8rem);
      width: 50rem;
      max-width: calc(100% - 8rem);
      border-radius: 1rem;
      padding: 3rem;
      color: rgba(31, 24, 17, 0.8);

      &::-webkit-scrollbar {
        width: 2rem;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(121, 102, 84, 0.6);
        border-radius: 1rem;
      }

      h2,
      p {
        color: #5a4d3f;

        &:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;

        button {
          border-color: #5a4d3f;
          color: #5a4d3f;
          font-size: 2.4rem;

          &:hover {
            background-color: #5a4d3f;
            color: white;
          }

          &.accept {
            background-color: #5a4d3f;
            color: white;

            &:hover {
              background-color: white;
              color: #5a4d3f;
            }
          }
        }
      }

      h2 {
        &:not(:first-child) {
          margin-top: 1.5em;
        }
      }

      p {
        font-family: 'Literata';
        font-size: 1.8rem;
      }
    }
  }
`
