import Modal from 'react-modal';
import { Container } from './styles';
import closeModalImg from '../../assets/close.svg'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root') //Acessibilidade(Está na doc do react-modal)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

        <input 
          placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}