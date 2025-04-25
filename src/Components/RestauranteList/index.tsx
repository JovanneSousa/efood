import CardRestaurante from '../CardRestaurante'
import { RestauranteSection } from './styles'

const RestauranteList = () => {
  return (
    <div className="container">
      <RestauranteSection>
        <CardRestaurante />
        <CardRestaurante />
        <CardRestaurante />
        <CardRestaurante />
      </RestauranteSection>
    </div>
  )
}
export default RestauranteList
