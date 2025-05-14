import { useDispatch, useSelector } from 'react-redux'

import { Restaurante } from '../../Pages/Home'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import Logo from '../Logo'
import * as S from './styles'

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
    <S.BackgroundHeader>
      <S.HeaderRestauranteTitulo className="container">
        <S.ContainersHeader>
          <S.Nav to="/">Restaurantes</S.Nav>
        </S.ContainersHeader>
        <S.ContainersHeader>
          <Logo />
        </S.ContainersHeader>
        <S.ContainersHeader>
          <span onClick={deixaVisivel}>
            {items.length} produto(s) no carrinho
          </span>
        </S.ContainersHeader>
      </S.HeaderRestauranteTitulo>
      <S.BannerSection style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <S.TipoRestaurante>{tipo}</S.TipoRestaurante>
          <S.NomeRestaurante>{nome}</S.NomeRestaurante>
        </div>
      </S.BannerSection>
    </S.BackgroundHeader>
  )
}
export default HeaderRestaurante
