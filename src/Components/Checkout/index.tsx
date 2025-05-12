import { useSelector } from 'react-redux'
import Button from '../Button'
import { CheckoutContainer, InputGroup } from './styles'
import { RootReducer } from '../../store'
import { formataPreco } from '../ListaProdutos'
import { getTotalPrice } from '../../utils'

type CheckoutProps = {
  checkoutType: 'payment' | 'delivery'
  finished: boolean
}

const Checkout = ({ checkoutType, finished }: CheckoutProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <CheckoutContainer>
      {checkoutType === 'delivery' && !finished ? (
        <>
          <h4>Entrega</h4>
          <form>
            <InputGroup>
              <label htmlFor="name">Quem irá receber</label>
              <input id="name" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input id="address" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </InputGroup>
            <div className="flex">
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Numero</label>
                <input id="number" type="text" />
              </InputGroup>
            </div>
            <InputGroup>
              <label htmlFor="complement">
                Complemento <span>(opcional)</span>
              </label>
              <input id="complement" type="text" />
            </InputGroup>
            <Button>Continuar com o pagamento</Button>
            <Button>Voltar para o carrinho</Button>
          </form>
        </>
      ) : !finished ? (
        <>
          <h4>
            Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
          </h4>
          <form>
            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input id="cardName" type="text" />
            </InputGroup>
            <div className="flex">
              <InputGroup className="flex70">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input id="cardNumber" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" type="text" />
              </InputGroup>
            </div>
            <div className="flex">
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input id="expiresMonth" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input id="expiresYear" type="text" />
              </InputGroup>
            </div>
            <Button>Continuar com o pagamento</Button>
            <Button>Voltar para o carrinho</Button>
          </form>
        </>
      ) : (
        <>
          <h4>Pedido realizado - 123456</h4>
          <div className="text-container">
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
          <Button>Concluir</Button>
        </>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
