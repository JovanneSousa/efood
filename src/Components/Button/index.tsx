import { ButtonHTMLAttributes } from 'react'
import { ButtonCarrinho } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <ButtonCarrinho className={className} type="button" onClick={onClick}>
      {' '}
      {children
        ? `Adicionar ao carrinho - ${children}`
        : 'Adicionar ao carrinho'}
    </ButtonCarrinho>
  )
}

export default Button
