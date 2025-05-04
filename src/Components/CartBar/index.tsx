import Button from '../Button'
import {
  CartContainer,
  SideBar,
  Price,
  Produto,
  Trash,
  ProductContainer
} from './styles'
import pizza from '../../Assets/image/pizza.png'
import lixeira from '../../Assets/image/lixeira.png'

const CartBar = () => {
  return (
    <CartContainer>
      <div className="overlay"></div>
      <SideBar>
        <ProductContainer>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
          <Produto>
            <img src={pizza} />
            <div>
              <h4>Nome Produto</h4>
              <p>R$ 60,90</p>
              <Trash src={lixeira} />
            </div>
          </Produto>
        </ProductContainer>

        <Price>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </Price>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default CartBar
