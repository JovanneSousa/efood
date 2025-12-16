import { type ButtonHTMLAttributes } from 'react'
import { ButtonCarrinho } from './styles'
import { formataPreco } from '../../utils'
import { Link } from 'react-router-dom'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  padding?: 'light' | 'big'
  to?: string
}

const Button = ({
  className,
  children,
  onClick,
  disabled,
  type,
  padding,
  to
}: Props) => {
  return (
    <ButtonCarrinho
      {...(to ? { as: Link, to } : {})}
      disabled={disabled}
      className={`shadow ${className}`}
      type={type ? type : 'button'}
      onClick={onClick}
      padding={padding}
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
