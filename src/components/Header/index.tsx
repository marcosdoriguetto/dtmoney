import logo from '../../assets/logo.svg';
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logo} alt="Logo" />

        <button 
          type="button" 
          onClick={onOpenNewTransactionModal}
        >Nova transição</button>
      </Content>
    </Container>
  )
}