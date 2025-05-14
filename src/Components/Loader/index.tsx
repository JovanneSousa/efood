import { IconWrapper, LoaderWrapper, Message } from './styles'
import { UtensilsCrossed } from 'lucide-react'

const Loader = () => {
  return (
    <LoaderWrapper>
      <IconWrapper>
        <UtensilsCrossed size={40} />
      </IconWrapper>
      <Message>Carregando...</Message>
    </LoaderWrapper>
  )
}

export default Loader
