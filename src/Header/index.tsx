import logo from '../Assets/image/logo.png'
import { Cabecalho, ImageHeader, TituloHeader } from './styles'

const Header = () => {
  return (
    <Cabecalho>
      <div className="container">
        <h1>
          <ImageHeader src={logo} alt="logo efood" />
        </h1>
        <TituloHeader>
          Viva experiências gastronômicas <br /> no conforto de sua casa
        </TituloHeader>
      </div>
    </Cabecalho>
  )
}

export default Header
