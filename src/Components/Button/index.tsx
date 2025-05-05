import { ButtonHTMLAttributes } from 'react'
import { ButtonCarrinho } from './styles'
import { formataPreco } from '../Modal'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <ButtonCarrinho className={className} type="button" onClick={onClick}>
      {typeof children === 'number'
        ? `Adicionar ao carrinho - ${formataPreco(children)}`
        : typeof children === 'string'
        ? children
        : 'Adicionar ao carrinho'}
    </ButtonCarrinho>
  )
}

export default Button
