import star from '../../Assets/image/star.png'
import Tag from '../Tags'
import {
  CardRestauranteItem,
  DescRestaurante,
  Nota,
  SaibaMais,
  TextDescRestaurante,
  TituloRestaurante,
  ContainerLink
} from './styles'

type Props = {
  nome: string
  categoria: string[]
  descricao: string
  nota: number
  id: number
  image: string
}

const CardRestaurante = ({
  categoria,
  descricao,
  nome,
  nota,
  image
}: Props) => {
  return (
    <CardRestauranteItem>
      <Tag categoria={categoria} />
      <img src={image} />
      <DescRestaurante>
        <TituloRestaurante>
          <h4>{nome}</h4>
          <Nota>
            <span>{nota}</span>
            <img src={star} />
          </Nota>
        </TituloRestaurante>
        <TextDescRestaurante>{descricao}</TextDescRestaurante>
        <ContainerLink>
          <SaibaMais to="/restaurantes">Saiba Mais</SaibaMais>
        </ContainerLink>
      </DescRestaurante>
    </CardRestauranteItem>
  )
}
export default CardRestaurante
