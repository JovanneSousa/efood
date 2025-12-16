import Button from '../Button'
import Logo from '../Logo'
import * as S from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import type React from 'react'

interface HeaderProps {
  noButtonLogin?: boolean
}

const Header: React.FC<HeaderProps> = ({ noButtonLogin = false }) => {
  const { logged } = useSelector((state: RootReducer) => state.auth)

  return (
    <S.Cabecalho>
      <div className="container">
        <div className="nav-header">
          <h1>
            <Logo />
          </h1>
          {!logged && !noButtonLogin ? (
            <S.ButtonContainer>
              <Button to={'/register'} children="Registre-se" padding="big" />
              <Button to={'/login'} children="Login" padding="big" />
            </S.ButtonContainer>
          ) : null}
        </div>
        <S.TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </S.TituloHeader>
      </div>
    </S.Cabecalho>
  )
}

export default Header
