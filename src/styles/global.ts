import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --shape: #ffffff;
    --background: #F0F2F5;

    --green: #33cc95;
    --red: #E52E4D;
    --blue: #5429cc;
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.50%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal__overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal__content {
    width: 100%;
    max-width: 575px;

    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .modal__close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: 0.15s ease-in;

    &:hover {
      filter: brightness(0.8);
    }
  }
`