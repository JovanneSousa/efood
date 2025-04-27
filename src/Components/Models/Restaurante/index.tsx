class Restaurante {
  nome: string
  categoria: string[]
  descricao: string
  nota: number
  image: string
  id: number

  constructor(
    nome: string,
    categoria: string[],
    descricao: string,
    nota: number,
    id: number,
    image: string
  ) {
    this.nome = nome
    this.categoria = categoria
    this.descricao = descricao
    this.nota = nota
    this.id = id
    this.image = image
  }
}

export default Restaurante
