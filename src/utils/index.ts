<<<<<<< HEAD
import { type Produto } from '../Pages/Restaurantes'
=======
import { Produto } from '../Pages/Restaurantes'
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11

export const getTotalPrice = (items: Produto[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return acumulador + (valorAtual.preco ?? 0)
  }, 0)
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
