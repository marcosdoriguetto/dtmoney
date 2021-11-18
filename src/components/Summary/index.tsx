import iconIncome from '../../assets/income.svg';
import iconOutcome from '../../assets/outcome.svg';
import iconTotal from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <h1>Entradas</h1>
          <img src={iconIncome} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>

      <div>
        <header>
          <h1>Saídas</h1>
          <img src={iconOutcome} alt="Saídas" />
        </header>
        <strong>- R$500</strong>
      </div>

      <div className="highlight-background">
        <header>
          <h1>Total</h1>
          <img src={iconTotal} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  )
}