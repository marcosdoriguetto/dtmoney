import { useContext } from 'react';
import iconIncome from '../../assets/income.svg';
import iconOutcome from '../../assets/outcome.svg';
import iconTotal from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions);

  function totalAmountCategory(type: string) {
    return transactions.reduce((accumulator, transaction) => {
      if (transaction.type === type) {
        return accumulator + transaction.amount;
      }

      return accumulator;
    }, 0)
  }

  const amountTotal = totalAmountCategory('deposit') - totalAmountCategory('withdraw');

  return(
    <Container activeColor={amountTotal >= 0 ? 'green' : 'red'}>
      <div>
        <header>
          <h1>Entradas</h1>
          <img src={iconIncome} alt="Entradas" />
        </header>
        <strong>R${totalAmountCategory('deposit')}</strong>
      </div>

      <div>
        <header>
          <h1>Saídas</h1>
          <img src={iconOutcome} alt="Saídas" />
        </header>
        <strong>- R${totalAmountCategory('withdraw')}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <h1>Total</h1>
          <img src={iconTotal} alt="Total" />
        </header>
        <strong>R${amountTotal}</strong>
      </div>
    </Container>
  )
}