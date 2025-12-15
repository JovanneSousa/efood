import Button from '../Button'

const FormLogin = () => {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="seu@email.com" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
      </div>
      <Button className="red" children="Fazer Login" padding='light'/>
    </form>
  )
}

export default FormLogin
