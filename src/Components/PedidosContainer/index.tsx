import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardPedido from '../CardPedido'
import type { Restaurante } from '../../Pages/Home'
import { PedidosContainerSection } from './styles'

interface PedidosContainerProps {
  variant: 'profile' | 'management'
  restaurante: Restaurante
}

const PedidosContainer = ({ variant, restaurante }: PedidosContainerProps) => {
  return variant == 'profile' ? (
    <PedidosContainerSection variant={variant}>
      <div className="title">
        <div>
          <FontAwesomeIcon icon={faBoxOpen} />
          <p>Histórico de pedidos</p>
        </div>
      </div>
      <p>Acompanhe todos os pedidos realizados</p>
      <CardPedido variant={variant} restaurante={restaurante} />
    </PedidosContainerSection>
  ) : (
    <PedidosContainerSection variant={variant}>
      <CardPedido variant={variant} restaurante={restaurante} />
      <CardPedido variant={variant} restaurante={restaurante} />
      <CardPedido variant={variant} restaurante={restaurante} />
      <CardPedido variant={variant} restaurante={restaurante} />
    </PedidosContainerSection>
  )
}

export default PedidosContainer
