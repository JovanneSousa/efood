import type { Restaurante } from '../../Pages/Home'
import ManagementCardPedido, { type ManagementCardPedidoProps } from './ManagementCardPedido'
import ProfileCardPedido, { type ProfileCardPedidoProps } from './ProfileCardPedido'

export interface BaseVariantProps {
  restaurante: Restaurante
}

type CardPedidoProps = ProfileCardPedidoProps | ManagementCardPedidoProps

const CardPedido = (props: CardPedidoProps) => {
  return props.variant == 'profile' ? (
    <ProfileCardPedido {...props} />
  ) : (
    <ManagementCardPedido {...props}/>
  )
}

export default CardPedido
