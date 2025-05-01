import { CardContainer, DescProduto, NomeProduto } from './styles'
import Button from '../Button'

type Props = {
  nome: string
  descricao: string
  image: string
  id: number
}

const CardProduto = ({ descricao, image, nome }: Props) => {
  const formataTexto = (descricao: string) => {
    if (descricao.length > 149) {
      return descricao.slice(0, 146) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <div>
        <img src={image} alt={nome} />
      </div>
      <div>
        <NomeProduto>{nome}</NomeProduto>
        <DescProduto>{formataTexto(descricao)}</DescProduto>
        <Button />
      </div>
    </CardContainer>
  )
}

export default CardProduto
