import Form from './Form'
import EndMessage from './EndMessage'

import { CheckoutContainer } from './styles'

export type CheckoutProps = {
  finished: boolean
}

const Checkout = ({ finished }: CheckoutProps) => {
  return (
    <CheckoutContainer>
      {!finished ? <Form /> : <EndMessage />}
    </CheckoutContainer>
  )
}

export default Checkout
