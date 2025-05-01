import Logo from '../Logo'
import fundo from '../../Assets/image/Vector.png'
import {
  BackgroundHeader,
  BannerSection,
  ContainersHeader,
  HeaderRestauranteTitulo,
  Nav,
  NomeRestaurante,
  TipoRestaurante
} from './styles'
import { Restaurante } from '../../Pages/Home'

type Props = {
  tipo: string[]
  nome: string
  restaurante: Restaurante
}

const HeaderRestaurante = ({ nome, tipo, restaurante }: Props) => {
  return (
    <BackgroundHeader>
      <HeaderRestauranteTitulo className="container">
        <ContainersHeader>
          <Nav to="/">Restaurantes</Nav>
        </ContainersHeader>
        <ContainersHeader>
          <Logo />
        </ContainersHeader>
        <ContainersHeader>
          <span>0 produtos no carrinho</span>
        </ContainersHeader>
      </HeaderRestauranteTitulo>
      <BannerSection style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <TipoRestaurante>{tipo}</TipoRestaurante>
          <NomeRestaurante>{nome}</NomeRestaurante>
        </div>
      </BannerSection>
    </BackgroundHeader>
  )
}
export default HeaderRestaurante
