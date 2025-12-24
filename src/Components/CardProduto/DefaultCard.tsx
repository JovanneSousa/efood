import { useState } from 'react'
import type { BaseProps } from '.'
import type { Produto } from '../../Pages/Restaurantes'
import Button from '../Button'
import Modal from '../Modal'
import * as S from './styles'
import { formataTexto } from '../../utils'

export interface DefaultProps extends BaseProps {
  variant: 'default'
}

const DefaultCard = ({ produto }: DefaultProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  const caracteresMáximosDaLinha = 149

  return (
    <>
      {produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          onClose={() => setIsVisible(false)}
          isVisible={isVisible}
        />
      )}
      <S.CardContainer variant="default" className="shadow">
        <div>
          <img src={produto.foto} alt={produto.nome} />
        </div>
        <div>
          <S.NomeProduto>{produto.nome}</S.NomeProduto>
          <S.DescProduto>
            {formataTexto(produto.descricao, caracteresMáximosDaLinha)}
          </S.DescProduto>
          <Button
            onClick={() => {
              setProdutoSelecionado(produto)
              setIsVisible(true)
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </S.CardContainer>
    </>
  )
}

export default DefaultCard
