import {styled} from 'styled-components'

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  background-color: rgba(49, 41, 33, 0.8);

  button {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    padding: 0;
    margin: 0;
    transition: scale 0.2s;

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 1.2rem;
      height: 3rem;
      width: 0.2rem;
      background-color: #ffffff;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      background-color: transparent !important;
      scale: 1.2;
    }
  }

  #content-box {
    background-color: white;
    overflow-y: auto;
    max-height: calc(100dvh - 16rem);
    width: 80rem;
    max-width: calc(100% - 16rem);
    border-radius: 1rem;
    padding: 6rem;

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
      color: rgba(31, 24, 17, 0.8);

      &:not(:last-child) {
        margin-bottom: 0.5em;
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

  @media (max-width: 750px) {
    align-items: flex-end;

    button {
      position: absolute;
      right: 3rem;
      top: 1.5rem;
      width: 2rem;
      height: 2rem;

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 1rem;
        height: 2.5rem;
        width: 0.2rem;
        background-color: #ffffff;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
    #content-box {
      max-height: calc(100dvh - 8rem);
      max-width: calc(100% - 6rem);
      padding: 3rem;
      margin-bottom: 3rem;
    }
  }
`
