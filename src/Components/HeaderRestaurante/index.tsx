import { useDispatch } from 'react-redux'

import { type Restaurante } from '../../Pages/Home'
import { open } from '../../store/reducers/cart'

import Logo from '../Logo'
import * as S from './styles'
import Loader from '../Loader'
import ButtonTopContainer from '../ButtonTopContainer'

type Props = {
  tipo: string[]
  nome: string
  restaurante: Restaurante
}

const HeaderRestaurante = ({ nome, tipo, restaurante }: Props) => {
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
          <ButtonTopContainer onClick={deixaVisivel} />
        </S.ContainersHeader>
      </S.HeaderRestauranteTitulo>
      {!restaurante ? <Loader /> : undefined}
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
