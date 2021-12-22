import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { FormEvent, useState } from 'react';

import closeModalImg from '../../assets/close.svg';
import incomeIconImg from '../../assets/income.svg';
import outcomeIconImg from '../../assets/outcome.svg';

import { ButtonTransaction, Container, TransactionTypeContainer } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root') //Acessibilidade(Está na doc do react-modal)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('')
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal__overlay"
      className="modal__content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          onClick={onRequestClose}
          className="modal__close"
        >
          <img src={closeModalImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)} 
        />

        <input
          placeholder="Valor" 
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}  
        />

        <TransactionTypeContainer>
          <ButtonTransaction 
            type="button" 
            onClick={ () => setType('deposit') }
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIconImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonTransaction>

          <ButtonTransaction 
            type="button" 
            onClick={ () => setType('withdraw') }
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIconImg} alt="Saída" />
            <span>Saída</span>
          </ButtonTransaction>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}  
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}