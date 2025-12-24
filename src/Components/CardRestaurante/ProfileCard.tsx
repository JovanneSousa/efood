import type { BaseProps } from '.'
import Button from '../Button'
import star from '../../assets/image/star.png'

import * as S from './styles'

export interface ProfileProps extends BaseProps {
  variant: 'profile'
}

const ProfileCard = ({
  categoria,
  id,
  image,
  nome,
  nota,
  variant
}: ProfileProps) => {
  return (
    <S.CardRestauranteItem variant={variant}>
      <S.Image variant={variant} fundo={image} />
      <S.DescRestaurante variant={variant}>
        <S.TituloRestaurante variant={variant}>
          <h4>{nome}</h4>
          <S.Nota variant={variant}>
            <p>Avaliação:</p> <span>{nota}</span>
            <img src={star} />
          </S.Nota>
          <p>Tipo: {categoria}</p>
        </S.TituloRestaurante>
        <S.ContainerLink variant="profile">
          <Button
            padding="light"
            className="red"
            to={`/gerenciar-restaurante/${id}`}
          >
            Gerenciar Restaurante
          </Button>
        </S.ContainerLink>
      </S.DescRestaurante>
    </S.CardRestauranteItem>
  )
}

export default ProfileCard
