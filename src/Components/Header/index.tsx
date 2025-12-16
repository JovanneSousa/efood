import Logo from '../Logo'
import * as S from './styles'
import type React from 'react'
import ButtonTopContainer from '../ButtonTopContainer'

interface HeaderProps {
  inLoginPage?: boolean
}

const Header: React.FC<HeaderProps> = ({ inLoginPage = false }) => {
  return (
    <S.Cabecalho>
      <div className="container">
        <div className="nav-header">
          <h1>
            <Logo />
          </h1>
          <ButtonTopContainer inLoginPage={inLoginPage} />
        </div>
        <S.TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </S.TituloHeader>
      </div>
    </S.Cabecalho>
  )
}

export default Header
