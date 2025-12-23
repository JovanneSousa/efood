import { cores } from '../../GlobalStyle'
import Button from '../Button'
import InputToggle from '../InputToggle'

interface FormAddressProps {
  isAdding: boolean
  closeForm: () => void
}

const FormAddress = ({ isAdding, closeForm }: FormAddressProps) => {
  return (
    <form>
      <p className='title-form'>{isAdding ? 'Adicionar um endereço' : 'Editar o endereço'}</p>
      <div className="flex-input-wrapper">
        <div className="input-wrapper">
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Definir como principal</label>
          <InputToggle background={cores.corFooter} label="Endereço padrão" />
        </div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="nome">Nome do endereço</label>
        <input type="text" id="nome" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="rua">Rua e numero</label>
        <input type="text" id="rua" />
      </div>
      <div className="flex-input-wrapper">
        <div className="input-wrapper">
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id="bairro" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" />
        </div>
      </div>

      <Button padding="light" className="red">
        {!isAdding ? 'Salvar Alterações' : 'Adicionar'}
      </Button>
      <Button onClick={closeForm} padding="light">
        Cancelar
      </Button>
    </form>
  )
}

export default FormAddress
