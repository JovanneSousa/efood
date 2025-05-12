import { Produto } from '../Pages/Restaurantes'

export const getTotalPrice = (items: Produto[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return acumulador + (valorAtual.preco ?? 0)
  }, 0)
}
