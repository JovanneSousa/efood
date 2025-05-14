import { ButtonHTMLAttributes } from 'react'
import { ButtonCarrinho } from './styles'
import { formataPreco } from '../ListaProdutos'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const Button = ({ className, children, onClick, disabled, type }: Props) => {
  return (
    <ButtonCarrinho
      disabled={disabled}
      className={className}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {typeof children === 'number'
        ? `Adicionar ao carrinho - ${formataPreco(children)}`
        : typeof children === 'string'
        ? children
        : 'Adicionar ao carrinho'}
    </ButtonCarrinho>
  )
}

export default Button
