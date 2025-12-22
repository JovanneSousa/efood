import { type Produto } from '../../Pages/Restaurantes'
import DefaultCard, { type DefaultProps } from './DefaultCard'
import type { ManagementProps } from './ManagementCard'
import ManagementCard from './ManagementCard'

export interface BaseProps {
  produto: Produto
}

type Props = DefaultProps | ManagementProps

const CardProduto = (props: Props) => {
  return props.variant == 'default' ? (
    <DefaultCard {...props} variant={props.variant} />
  ) : (
    <ManagementCard {...props} variant={props.variant} />
  )
}

export default CardProduto
