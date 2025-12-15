<<<<<<< HEAD
import { type ButtonHTMLAttributes } from 'react'
=======
import { ButtonHTMLAttributes } from 'react'
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11
import { ButtonCarrinho } from './styles'
import { formataPreco } from '../../utils'

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
