import facebook from '../../Assets/image/Facebook.png'
import twitter from '../../Assets/image/Twitter.png'
import instagram from '../../Assets/image/Instagram.png'
import * as S from './styles'
import Logo from '../Logo'

const Footer = () => {
  return (
    <S.FooterSection>
      <div className="container">
        <Logo />
        <S.ContainerImage>
          <S.ImageFooter src={instagram} />
          <S.ImageFooter src={facebook} />
          <S.ImageFooter src={twitter} />
        </S.ContainerImage>
        <S.TextoFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.{' '}
        </S.TextoFooter>
      </div>
    </S.FooterSection>
  )
}

export default Footer
