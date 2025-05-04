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
import { Restaurante } from '../../Pages/Home'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  tipo: string[]
  nome: string
  restaurante: Restaurante
}

const HeaderRestaurante = ({ nome, tipo, restaurante }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const deixaVisivel = () => {
    dispatch(open())
  }

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
          <span onClick={deixaVisivel}>
            {items.length} produtos no carrinho
          </span>
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
