import { useState } from 'react'

import Button from '../Button'
import Modal from '../Modal'
import { Produto } from '../../Pages/Restaurantes'

import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  image: string
  id: number
  preco: number
  porcao: string
}

const CardProduto = ({ descricao, image, nome, id, porcao, preco }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  const formataTexto = (descricao: string) => {
    if (descricao.length > 149) {
      return descricao.slice(0, 146) + '...'
    }
    return descricao
  }

  const deixaVisivel = () => {
    return setIsVisible(true)
  }

  const fechaModal = () => {
    return setIsVisible(false)
  }

  const selecionarProduto = () => {
    const produto: Produto = {
      nome,
      descricao,
      foto: image,
      id,
      preco,
      porcao
    }
    setProdutoSelecionado(produto)
  }

  return (
    <>
      {produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          onClose={fechaModal}
          isVisible={isVisible}
        />
      )}
      <S.CardContainer>
        <div>
          <img src={image} alt={nome} />
        </div>
        <div>
          <S.NomeProduto>{nome}</S.NomeProduto>
          <S.DescProduto>{formataTexto(descricao)}</S.DescProduto>
          <Button
            onClick={() => {
              selecionarProduto()
              deixaVisivel()
            }}
          />
        </div>
      </S.CardContainer>
    </>
  )
}

export default CardProduto
