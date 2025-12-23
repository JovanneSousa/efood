import Button from '../Button'

const FormConfigRestaurante = () => {
  return (
    <form>
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
        <Button className='shine' padding="light" type="button">
          Cancelar
        </Button>
        <Button padding="light" className="red">
          Salvar alterações
        </Button>
      </div>
    </form>
  )
}

export default FormConfigRestaurante
