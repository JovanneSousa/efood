import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { BaseProps } from '.'
import { formataPreco, formataTexto } from '../../utils'
import Button from '../Button'
import * as S from './styles'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export interface ManagementProps extends BaseProps {
  variant: 'management'
  setIsEditing: () => void
}

const ManagementCard = ({ produto, setIsEditing }: ManagementProps) => {
  const caracteresMáximosDaLinha = 45

  return (
    <S.CardContainer variant="management">
      <div className="flex">
        <div>
          <img src={produto.foto} alt={produto.nome} />
        </div>
        <div className="text">
          <p className="nome">{produto.nome}</p>
          <p>{formataTexto(produto.descricao, caracteresMáximosDaLinha)}</p>
          <p>{produto.porcao}</p>
          <p className="preco">{formataPreco(produto.preco)}</p>
        </div>
      </div>
      <div className="flex">
        <Button onClick={setIsEditing} padding="light">Editar</Button>
        <Button padding='light' className='minor'>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </S.CardContainer>
  )
}

export default ManagementCard
