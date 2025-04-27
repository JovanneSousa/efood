import CardRestaurante from '../CardRestaurante'
import { RestauranteSection } from './styles'
import Restaurantes from '../Models/Restaurante'

export type Props = {
  Restaurantess: Restaurantes[]
}

const RestauranteList = ({ Restaurantess }: Props) => {
  return (
    <div className="container">
      <RestauranteSection>
        {Restaurantess.map((Restaurantess) => (
          <CardRestaurante
            nome={Restaurantess.nome}
            descricao={Restaurantess.descricao}
            key={Restaurantess.id}
            nota={Restaurantess.nota}
            id={Restaurantess.id}
            categoria={Restaurantess.categoria}
            image={Restaurantess.image}
          />
        ))}
      </RestauranteSection>
    </div>
  )
}
export default RestauranteList
