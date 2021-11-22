import Modal from 'react-modal';
import { ButtonTransaction, Container, TransactionTypeContainer } from './styles';
import closeModalImg from '../../assets/close.svg';
import incomeIconImg from '../../assets/income.svg';
import outcomeIconImg from '../../assets/outcome.svg';
import { useState } from 'react';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root') //Acessibilidade(Está na doc do react-modal)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('');

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal__overlay"
      className="modal__content"
    >
      <Container>
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
        />

        <input
          placeholder="Valor" 
          type="number" 
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
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}