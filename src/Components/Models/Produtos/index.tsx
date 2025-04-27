class ProdutoItem {
  nome: string
  descricao: string
  image: string
  id: number

  constructor(nome: string, descricao: string, image: string, id: number) {
    this.nome = nome
    this.descricao = descricao
    this.image = image
    this.id = id
  }
}

export default ProdutoItem
