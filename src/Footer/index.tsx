import logo from '../Assets/image/logo.png'
import redes from '../Assets/image/redes_sociais.png'
import { FooterSection, TextoFooter } from './styles'

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <img src={logo} />
        <img src={redes} />
        <TextoFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </TextoFooter>
      </div>
    </FooterSection>
  )
}

export default Footer
