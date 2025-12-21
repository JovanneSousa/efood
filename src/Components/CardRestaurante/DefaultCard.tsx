import type { BaseProps } from '.'
import Button from '../Button'
import Tag from '../Tags'
import star from '../../assets/image/star.png'

import * as S from './styles'

export interface DefaultProps extends BaseProps {
  variant: 'default'
  descricao: string
  destaque: boolean
}

const DefaultCard = ({
  id,
  nome,
  categoria,
  descricao,
  destaque,
  nota,
  image,
  variant
}: DefaultProps) => {
  return (
    <S.CardRestauranteItem variant={variant}>
      <Tag destaque={destaque} categoria={categoria} />
      <img src={image} />
      <S.DescRestaurante>
        <S.TituloRestaurante variant={variant}>
          <h4>{nome}</h4>
          <S.Nota variant={variant}>
            <span>{nota}</span>
            <img src={star} />
          </S.Nota>
        </S.TituloRestaurante>
        <S.TextDescRestaurante>{descricao}</S.TextDescRestaurante>
        <S.ContainerLink variant="default">
          <Button className="red" to={`/restaurantes/${id}`}>
            Saiba Mais
          </Button>
        </S.ContainerLink>
      </S.DescRestaurante>
    </S.CardRestauranteItem>
  )
}

export default DefaultCard
