import Logo from '../Logo'
import {
  BackgroundHeader,
  BannerSection,
  HeaderRestauranteTitulo,
  Nav,
  NomeRestaurante,
  TipoRestaurante
} from './styles'

const HeaderRestaurante = () => {
  return (
    <BackgroundHeader>
      <HeaderRestauranteTitulo className="container">
        <Nav to="/">Restaurantes</Nav>
        <Logo />
        <span>0 produtos no carrinho</span>
      </HeaderRestauranteTitulo>
      <BannerSection>
        <div className="container">
          <TipoRestaurante>Italiana</TipoRestaurante>
          <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
        </div>
      </BannerSection>
    </BackgroundHeader>
  )
}
export default HeaderRestaurante
