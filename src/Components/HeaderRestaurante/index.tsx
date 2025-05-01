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

type Props = {
  tipo: string[]
  nome: string
}

const HeaderRestaurante = ({ nome, tipo }: Props) => {
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
          <TipoRestaurante>{tipo}</TipoRestaurante>
          <NomeRestaurante>{nome}</NomeRestaurante>
        </div>
      </BannerSection>
    </BackgroundHeader>
  )
}
export default HeaderRestaurante
