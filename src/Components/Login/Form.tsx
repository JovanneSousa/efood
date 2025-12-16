import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { login, type LoginFormData } from '../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../../Validations/loginScheme'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import type { AppDispatch, RootReducer } from '../../store'

const user = import.meta.env.VITE_USERNAME

const senha = import.meta.env.VITE_PASSWORD

const FormLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { error } = useSelector((state: RootReducer) => state.auth)

  const {
    register: loginInput,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await dispatch(login(data)).unwrap()
      reset()
      navigate('/')
    } catch {
      //erro tratado no slice (auth.error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...loginInput('email')}
          placeholder="seu@email.com"
        />
        <span>{errors.email?.message}</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Senha</label>
        <input type="password" {...loginInput('password')} id="password" />
        <span>{errors.password?.message || error}</span>
      </div>
      <Button
        type="submit"
        className="red"
        children="Fazer Login"
        padding="light"
      />
    </form>
  )
}

export default FormLogin
