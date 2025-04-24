import Logo from '../Logo'
import { Cabecalho, TituloHeader } from './styles'

const Header = () => {
  return (
    <Cabecalho>
      <div className="container">
        <h1>
          <Logo />
        </h1>
        <TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </TituloHeader>
      </div>
    </Cabecalho>
  )
}

export default Header
