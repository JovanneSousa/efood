import logo from '../../Assets/image/logo.png'
import facebook from '../../Assets/image/Facebook.png'
import twitter from '../../Assets/image/Twitter.png'
import instagram from '../../Assets/image/Instagram.png'
import {
  ContainerImage,
  FooterSection,
  ImageFooter,
  TextoFooter
} from './styles'
import Logo from '../Logo'

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <Logo />
        <ContainerImage>
          <ImageFooter src={instagram} />
          <ImageFooter src={facebook} />
          <ImageFooter src={twitter} />
        </ContainerImage>
        <TextoFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.{' '}
        </TextoFooter>
      </div>
    </FooterSection>
  )
}

export default Footer
