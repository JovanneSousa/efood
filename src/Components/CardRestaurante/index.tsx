import sushi from '../../Assets/image/sushi.png'
import { CardRestauranteItem, DescRestaurante } from './styles'

const CardRestaurante = () => {
  return (
    <CardRestauranteItem>
      <img src={sushi} />
      <DescRestaurante>
        <span>
          <h4>Hioki Sushi</h4>
          <p>4.9</p>
        </span>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <a href="#">Saiba Mais</a>
      </DescRestaurante>
    </CardRestauranteItem>
  )
}
export default CardRestaurante
