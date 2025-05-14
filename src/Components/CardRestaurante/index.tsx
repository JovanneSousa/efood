import star from '../../Assets/image/star.png'
import Tag from '../Tags'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string[]
  descricao: string
  nota: number
  id: number
  image: string
  destaque: boolean
}

const CardRestaurante = ({
  categoria,
  descricao,
  nome,
  nota,
  image,
  destaque,
  id
}: Props) => {
  return (
    <S.CardRestauranteItem>
      <Tag destaque={destaque} categoria={categoria} />
      <img src={image} />
      <S.DescRestaurante>
        <S.TituloRestaurante>
          <h4>{nome}</h4>
          <S.Nota>
            <span>{nota}</span>
            <img src={star} />
          </S.Nota>
        </S.TituloRestaurante>
        <S.TextDescRestaurante>{descricao}</S.TextDescRestaurante>
        <S.ContainerLink>
          <S.SaibaMais to={`/restaurantes/${id}`}>Saiba Mais</S.SaibaMais>
        </S.ContainerLink>
      </S.DescRestaurante>
    </S.CardRestauranteItem>
  )
}
export default CardRestaurante
