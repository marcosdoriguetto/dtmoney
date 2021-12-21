import styled from "styled-components";

const colors = {
  green: '#33cc95',
  red: '#E52E4D'
}

type BackgroundProps = {
  activeColor: 'green' | 'red';
}

export const Container = styled.div<BackgroundProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.5rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    h1 {
      font-size: 1.25rem;
      font-weight: 400;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.highlight-background {
      background-color: ${props => colors[props.activeColor]};
      color: #FFF;
    }
  }
`;