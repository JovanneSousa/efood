import type { DefaultProps } from './DefaultCard'
import type { ProfileProps } from './ProfileCard'
import DefaultCard from './DefaultCard'
import ProfileCard from './ProfileCard'

export interface BaseProps {
  id: number
  nome: string
  categoria: string[]
  nota: number
  image: string
}

type Props = DefaultProps | ProfileProps

const CardRestaurante = (props: Props) => {
  return props.variant == 'default' ? (
    <DefaultCard {...props} />
  ) : (
    <ProfileCard {...props} />
  )
}
export default CardRestaurante
