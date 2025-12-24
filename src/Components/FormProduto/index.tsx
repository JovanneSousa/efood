import Button from '../Button'

interface FormProdutoProps {
  cancel: () => void
  isEditing: boolean
}

export const FormProduto = ({ cancel, isEditing }: FormProdutoProps) => {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="nome">Nome do produto</label>
        <input type="text" id="nome" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="desc">Descrição</label>
        <input type="text" id="desc" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="preco">Preço</label>
        <input type="text" id="preco" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="porcao">Porção</label>
        <input type="text" id="porcao" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="img">Imagem do produto</label>
        <input type="file" id="img" />
      </div>
      <div className="flex">
        <Button padding="light" className="shine" onClick={cancel}>
          Cancelar
        </Button>
        <Button padding="light" className="red">
          {isEditing ? 'Salvar' : 'Adicionar'}
        </Button>
      </div>
    </form>
  )
}

export default FormProduto
