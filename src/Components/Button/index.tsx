import { type ButtonHTMLAttributes } from 'react'
import { ButtonCarrinho } from './styles'
import { formataPreco } from '../../utils'
import { Link } from 'react-router-dom'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  padding?: 'light' | 'big'
  to?: string
  price?: number
}

const Button = ({
  className,
  children,
  onClick,
  disabled,
  type,
  padding,
  to,
  price
}: Props) => {
  const content = price
    ? `Adicionar ao carrinho - ${formataPreco(price)}`
    : children

  return (
    <ButtonCarrinho
      {...(to ? { as: Link, to } : {})}
      disabled={disabled}
      className={`shadow ${className}`}
      type={type ? type : 'button'}
      onClick={onClick}
      padding={padding}
    >
      {content}
    </ButtonCarrinho>
  )
}

export default Button
