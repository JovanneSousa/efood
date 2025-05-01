import {
  ModalContent,
  ModalSection,
  ModalDescription,
  ButtonComprar
} from './styles'
import close from '../../Assets/image/close.png'
import { Produto } from '../../Pages/Restaurantes'

type Props = {
  isVisible: boolean
  onClose: () => void
  produto?: Produto
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ isVisible, onClose, produto }: Props) => {
  if (!produto) {
    return <h3>Carregando...</h3>
  }

  return (
    <ModalSection className={isVisible ? 'visible' : ''}>
      <ModalContent className="container">
        <header>
          <img src={close} onClick={onClose} alt="fechar" />
        </header>
        <ModalDescription>
          <img src={produto.foto} />

          <div>
            <h3>{produto.nome}</h3>

            <p>{produto.descricao}</p>
            <p>serve: de {produto.porcao}</p>

            <ButtonComprar>{formataPreco(produto.preco)}</ButtonComprar>
          </div>
        </ModalDescription>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </ModalSection>
  )
}

export default Modal
