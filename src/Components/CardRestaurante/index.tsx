import star from '../../assets/image/star.png'
import Button from '../Button'
import Tag from '../Tags'
import * as S from './styles'

interface DefaultCardProps {
  variant: 'default'
  nome: string
  categoria: string[]
  descricao: string
  nota: number
  id: number
  image: string
  destaque: boolean
}

interface ProfileCardProps {
  variant: 'profile'
  nome: string
  categoria: string[]
  nota: number
  id: number
  image: string
}

type CardRestauranteProps = DefaultCardProps | ProfileCardProps

const CardRestaurante = (props: CardRestauranteProps) => {
  if (props.variant == 'default') {
    const { categoria, descricao, destaque, id, image, nome, nota } = props

    return (
      <S.CardRestauranteItem variant={props.variant}>
        <Tag destaque={destaque} categoria={categoria} />
        <img src={image} />
        <S.DescRestaurante>
          <S.TituloRestaurante variant={props.variant}>
            <h4>{nome}</h4>
            <S.Nota variant={props.variant}>
              <span>{nota}</span>
              <img src={star} />
            </S.Nota>
          </S.TituloRestaurante>
          <S.TextDescRestaurante>{descricao}</S.TextDescRestaurante>
          <S.ContainerLink variant='default'>
            <Button className="red" to={`/restaurantes/${id}`}>
              Saiba Mais
            </Button>
          </S.ContainerLink>
        </S.DescRestaurante>
      </S.CardRestauranteItem>
    )
  }

  const { nome, categoria, id, image, nota } = props
  return (
    <S.CardRestauranteItem variant={props.variant}>
      <img src={image} />
      <S.DescRestaurante>
        <S.TituloRestaurante variant={props.variant}>
          <h4>{nome}</h4>
          <S.Nota variant={props.variant}>
            <p>Avaliação:</p> <span>{nota}</span>
            <img src={star} />
          </S.Nota>
          <p>Tipo: {categoria}</p>
        </S.TituloRestaurante>
        <S.ContainerLink variant='profile'>
          <Button padding='light' className="red" to={`/gerenciar-restaurante/${id}`}>
            Gerenciar Restaurante
          </Button>
        </S.ContainerLink>
      </S.DescRestaurante>
    </S.CardRestauranteItem>
  )
}
export default CardRestaurante
