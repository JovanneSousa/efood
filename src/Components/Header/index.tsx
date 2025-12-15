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
      </div>
    </S.Cabecalho>
  )
}

export default Header
