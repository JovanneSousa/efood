import { Restaurante } from '../../Pages/Home'
import CardRestaurante from '../CardRestaurante'
import { RestauranteSection } from './styles'

export type Props = {
  Restaurantes: Restaurante[]
}

const RestauranteList = ({ Restaurantes }: Props) => {
  return (
    <div className="container">
      <RestauranteSection>
        {Restaurantes.map((Restaurante) => (
          <CardRestaurante
            destaque={Restaurante.destacado}
            nome={Restaurante.titulo}
            descricao={Restaurante.descricao}
            key={Restaurante.id}
            nota={Restaurante.avaliacao}
            id={Restaurante.id}
            categoria={Restaurante.tipo}
            image={Restaurante.capa}
          />
        ))}
      </RestauranteSection>
    </div>
  )
}
export default RestauranteList
