import { type Produto } from '../Pages/Restaurantes'

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

export const formataTexto = (descricao: string, caracteres: number) => {
  if (descricao.length > caracteres) {
    return descricao.slice(0, caracteres - 3) + '...'
  }
  return descricao
}
