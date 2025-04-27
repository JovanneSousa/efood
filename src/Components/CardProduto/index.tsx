import { CardContainer, DescProduto, NomeProduto } from './styles'
import pizza from '../../Assets/image/pizza.png'
import Button from '../Button'

type Props = {
  item: string
  descricao: string
  image: string
}

const CardProduto = ({ descricao, image, item }: Props) => {
  return (
    <CardContainer>
      <div>
        <img src={image} alt={item} />
      </div>
      <div>
        <NomeProduto>{item}</NomeProduto>
        <DescProduto>{descricao}</DescProduto>
        <Button />
      </div>
    </CardContainer>
  )
}

export default CardProduto
