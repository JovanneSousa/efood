import {
  ModalContent,
  ModalSection,
  ModalDescription,
  ButtonComprar
} from './styles'
import close from '../../Assets/image/close.png'
import { Produto } from '../../Pages/Restaurantes'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  isVisible: boolean
  onClose: () => void
  produto?: Produto
}

const Modal = ({ isVisible, onClose, produto }: Props) => {
  const dispatch = useDispatch()

  const deixaVisivel = () => {
    dispatch(open())
  }

  const addItem = (produto: Produto) => {
    dispatch(add(produto))
  }

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

            <ButtonComprar
              onClick={() => {
                addItem(produto)
                deixaVisivel()
                onClose()
              }}
            >
              {produto.preco}
            </ButtonComprar>
          </div>
        </ModalDescription>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </ModalSection>
  )
}

export default Modal
