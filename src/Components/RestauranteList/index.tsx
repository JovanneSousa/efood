import items from '../../Data'
import CardRestaurante from '../CardRestaurante'

import { RestauranteSection } from './styles'

const RestauranteList = () => {
  return (
    <div className="container">
      <RestauranteSection>
        {items.map((restaurante) => (
          <CardRestaurante
            variant="default"
            destaque={restaurante.destacado}
            nome={restaurante.titulo}
            descricao={restaurante.descricao}
            key={restaurante.id}
            nota={restaurante.avaliacao}
            id={restaurante.id}
            categoria={restaurante.tipo}
            image={restaurante.capa}
          />
        ))}
      </RestauranteSection>
    </div>
  )
}
export default RestauranteList
