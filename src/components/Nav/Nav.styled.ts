import {styled} from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  gap: 3rem 6rem;
  padding: 5rem 0;

  > svg {
    flex: 0 0 15rem;
  }

  #packs {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: flex-end;

    button {
      position: relative;
      padding: 0;
      border: none;
      flex: 0 0 6rem;
      height: 6rem;

      img {
        pointer-events: none;
        opacity: 0.25;
        transition: scale 0.2s, opacity 0.2s;
      }

      &.active {
        img {
          opacity: 1;
        }
      }

      &:after {
        display: block;
        position: absolute;
        pointer-events: none;
        font-size: 1.8rem;
        line-height: 1.2;
        color: white;
      }

      &:disabled {
        cursor: default;

        img {
          opacity: 0.15;
        }

        &:after {
          content: 'coming soon';
          rotate: -10deg;
        }
      }

      &:hover {
        background-color: transparent;
      }

      &:not(:disabled) {
        &:after {
          content: attr(data-content);
          bottom: -2rem;
          transform: translateY(100%);
          width: 200%;
          background-color: white;
          color: #5a4d3f;
          z-index: 1;
          border-radius: 1rem;
          padding: 0.6rem 1.2rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        &:hover {
          &:after {
            opacity: 1;
          }

          img {
            scale: 1.4;
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;

    > svg {
      flex: 0 0 8rem;
    }

    #packs {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`
