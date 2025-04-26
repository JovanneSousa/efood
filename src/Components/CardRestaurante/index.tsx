import star from '../../Assets/image/star.png'

import sushi from '../../Assets/image/sushi.png'
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

const CardRestaurante = () => {
  return (
    <CardRestauranteItem>
      <Tag />
      <img src={sushi} />
      <DescRestaurante>
        <TituloRestaurante>
          <h4>Hioki Sushi</h4>
          <Nota>
            <span>4.9</span>
            <img src={star} />
          </Nota>
        </TituloRestaurante>
        <TextDescRestaurante>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </TextDescRestaurante>
        <ContainerLink>
          <SaibaMais to="/restaurantes">Saiba Mais</SaibaMais>
        </ContainerLink>
      </DescRestaurante>
    </CardRestauranteItem>
  )
}
export default CardRestaurante
