import { useDispatch } from 'react-redux'

import { type Produto } from '../../Pages/Restaurantes'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'
import close from '../../assets/image/close.png'
import Button from '../Button'

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
    <S.ModalSection className={isVisible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <header>
          <img src={close} onClick={onClose} alt="fechar" />
        </header>
        <S.ModalDescription>
          <img src={produto.foto} />

          <div>
            <h3>{produto.nome}</h3>

            <p>{produto.descricao}</p>
            <p>serve: de {produto.porcao}</p>

            <Button
              className="comprar"
              onClick={() => {
                addItem(produto)
                deixaVisivel()
                onClose()
              }}
            >
              {produto.preco}
            </Button>
          </div>
        </S.ModalDescription>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.ModalSection>
  )
}

export default Modal
