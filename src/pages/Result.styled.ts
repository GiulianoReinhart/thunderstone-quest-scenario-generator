import {styled} from 'styled-components'

export const StyledResult = styled.main`
  display: flex;
  gap: 6rem;
  justify-content: center;

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;

    .card-box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20rem;
      max-width: 100%;
      min-height: 9rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;

      &:after {
        content: '';
        display: block;
        position: absolute;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        border-radius: 0.5rem;
      }

      * {
        z-index: 1;
      }

      svg {
        position: absolute;
        top: 0;
        height: 3rem;
        width: 3rem;
      }

      small {
        font-family: 'Literata';
        text-transform: uppercase;
        font-size: 1rem;
      }
    }
  }

  #market {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-areas:
      'weapons spells'
      'items items';
    grid-area: market;
    gap: 3rem;

    #weapons {
      grid-area: weapons;

      .card-box:after {
        background-color: #a27c54;
      }
    }

    #spells {
      grid-area: spells;

      .card-box:after {
        background-color: #ae63a1;
      }
    }

    #items {
      grid-area: items;

      .card-container {
        flex-direction: row;

        .card-box:after {
          background-color: #589c53;
        }
      }
    }
  }

  #heroes {
    display: flex;
    flex-direction: column;
    grid-area: heroes;

    .card-container {
      display: grid;
      grid-template-columns: 1fr;
      flex: 1 1 100%;

      .card-box {
        height: 100%;

        &:after {
          background-color: #6a63ae;
        }
      }
    }
  }

  #enemies {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: enemies;

    .card-box:after {
      background-color: #ae6363;
    }
  }

  #dungeon-rooms {
    display: flex;
    flex-direction: column;
    grid-area: rooms;

    .card-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex: 1 1 100%;

      .card-box {
        height: 100%;

        &:after {
          background-color: #787b85;
        }
      }
    }
  }

  @media (max-width: 1580px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'market market'
      'heroes enemies'
      'rooms rooms';
    max-width: 100%;
    gap: 3rem;

    #dungeon-rooms {
      .card-container {
        .card-box {
          height: 15rem;
        }
      }
    }
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'market'
      'heroes'
      'enemies'
      'rooms';

    #market {
      grid-template-rows: 1fr;
      grid-template-areas:
        'weapons'
        'spells'
        'items';

      #items {
        .card-container {
          flex-direction: column;
        }
      }
    }

    #dungeon-rooms {
      .card-container {
        grid-template-columns: 1fr;

        .card-box {
          height: 15rem;
        }
      }
    }
  }
`
