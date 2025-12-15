import Button from '../Button'
import Logo from '../Logo'
import * as S from './styles'

const Header = () => {
  return (
    <S.Cabecalho>
      <div className="container">
        <h1>
          <Logo />
        </h1>
        <S.TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </S.TituloHeader>
        <S.ButtonContainer>
          <Button to={'/login'} children="Login" padding="big" />
          <Button children="Registre-se" padding="big" />
        </S.ButtonContainer>
      </div>
    </S.Cabecalho>
  )
}

export default Header
