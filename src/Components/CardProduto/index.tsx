import { CardContainer, DescProduto, NomeProduto } from './styles'
import Button from '../Button'

type Props = {
  nome: string
  descricao: string
  image: string
  id: number
}

const CardProduto = ({ descricao, image, nome }: Props) => {
  return (
    <CardContainer>
      <div>
        <img src={image} alt={nome} />
      </div>
      <div>
        <NomeProduto>{nome}</NomeProduto>
        <DescProduto>{descricao}</DescProduto>
        <Button />
      </div>
    </CardContainer>
  )
}

export default CardProduto
