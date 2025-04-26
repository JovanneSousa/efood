import Logo from '../Logo'
import {
  BackgroundHeader,
  BannerSection,
  HeaderRestauranteTitulo,
  NomeRestaurante,
  TipoRestaurante
} from './styles'

const HeaderRestaurante = () => {
  return (
    <BackgroundHeader>
      <HeaderRestauranteTitulo className="container">
        <h3>Restaurantes</h3>
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
