import logo from '../../assets/image/logo.png'
import { ContainerImg } from './styles'
import { ImgLogo } from './styles'

const Logo = () => {
  return (
    <ContainerImg>
      <ImgLogo src={logo} alt="Logo efood" />
    </ContainerImg>
  )
}

export default Logo
