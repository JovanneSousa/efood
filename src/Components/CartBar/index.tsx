import Button from '../Button'
import {
  CartContainer,
  SideBar,
  Price,
  Produto,
  Trash,
  ProductContainer
} from './styles'
import lixeira from '../../Assets/image/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListaProdutos'

const CartBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.preco ?? 0)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={closeCart}></div>
      <SideBar>
        <ProductContainer>
          {items.map((item) => (
            <Produto key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
                <Trash src={lixeira} onClick={() => removeItem(item.id)} />
              </div>
            </Produto>
          ))}
        </ProductContainer>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Price>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default CartBar
