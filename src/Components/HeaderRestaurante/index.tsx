import Logo from '../Logo'
import {
  BackgroundHeader,
  BannerSection,
  ContainersHeader,
  HeaderRestauranteTitulo,
  Nav,
  NomeRestaurante,
  TipoRestaurante
} from './styles'

const HeaderRestaurante = () => {
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
