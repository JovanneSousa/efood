import Logo from '../Logo'
import * as S from './styles'
import ButtonTopContainer from '../ButtonTopContainer'
import { Loader } from 'lucide-react'
import type { Restaurante } from '../../Pages/Home'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/reducers/auth'
import { useEffect } from 'react'

interface DefaultHeaderProps {
  variant: 'default'
}

interface RestaurantHeaderProps {
  variant: 'restaurante'
  tipo: string[]
  nome: string
  restaurante: Restaurante
}

type HeaderProps = DefaultHeaderProps | RestaurantHeaderProps

const Header = (props: HeaderProps) => {
  const ONE_HOUR = 60 * 60 * 1000
  const dispatch = useDispatch()

  const issuedAt = Number(localStorage.getItem('issuedAt'))
  const expiresAt = issuedAt + ONE_HOUR

  useEffect(() => {
    if (Date.now() >= expiresAt) {
      dispatch(logout())
    }
  }, [dispatch, expiresAt])

  if (props.variant == 'restaurante') {
    const { nome, restaurante, tipo } = props

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
            <ButtonTopContainer />
          </S.ContainersHeader>
        </S.HeaderRestauranteTitulo>
        {!restaurante ? <Loader /> : undefined}
        <S.BannerSection
          style={{ backgroundImage: `url(${restaurante.capa})` }}
        >
          <div className="container">
            <S.TipoRestaurante>{tipo}</S.TipoRestaurante>
            <S.NomeRestaurante>{nome}</S.NomeRestaurante>
          </div>
        </S.BannerSection>
      </S.BackgroundHeader>
    )
  }

  return (
    <S.Cabecalho>
      <div className="container">
        <div className="nav-header">
          <h1>
            <Logo />
          </h1>
          <ButtonTopContainer />
        </div>
        <S.TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </S.TituloHeader>
      </div>
    </S.Cabecalho>
  )
}

export default Header
