import Button from '../Button'

interface FormRestauranteProps {
  editing: boolean
  cancel: () => void
}

const FormRestaurante = ({ editing, cancel }: FormRestauranteProps) => {
  return (
    <form>
      {!editing ? <p className="title-form">Adicionar um restaurante</p> : null}
      <div className="input-wrapper">
        <label htmlFor="titulo">Nome do restaurante</label>
        <input type="text" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="desc">Descrição do restaurante</label>
        <input type="text" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="img">Foto do restaurante</label>
        <input type="file" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="number">Telefone</label>
        <input type="text" id="number" />
      </div>
      <div className="flex">
        <Button padding="light" className="red">
          {editing ? 'Salvar alterações' : 'Adicionar'}
        </Button>
        <Button
          onClick={cancel}
          className="shine"
          padding="light"
          type="button"
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}

export default FormRestaurante
