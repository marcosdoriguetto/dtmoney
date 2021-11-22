import Modal from 'react-modal';
import { ButtonTransaction, Container, TransactionTypeContainer } from './styles';
import closeModalImg from '../../assets/close.svg';
import incomeIconImg from '../../assets/income.svg';
import outcomeIconImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root') //Acessibilidade(Está na doc do react-modal)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [typeTransaction, setTypeTransaction] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      typeTransaction,
    }

    api.post('/transactions', data)
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
          value={value}
          onChange={event => setValue(Number(event.target.value))}  
        />

        <TransactionTypeContainer>
          <ButtonTransaction 
            type="button" 
            onClick={ () => setTypeTransaction('deposit') }
            isActive={typeTransaction === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIconImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonTransaction>

          <ButtonTransaction 
            type="button" 
            onClick={ () => setTypeTransaction('withdraw') }
            isActive={typeTransaction === 'withdraw'}
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