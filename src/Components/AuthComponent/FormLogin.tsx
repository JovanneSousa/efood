import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { login, type LoginFormData } from '../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../../Validations/loginScheme'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import type { AppDispatch, RootReducer } from '../../store'
import { systemName } from '../../services/systemName'

const user = import.meta.env.VITE_USERNAME

const senha = import.meta.env.VITE_PASSWORD

const FormLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { error } = useSelector((state: RootReducer) => state.auth)

  const {
    register: loginInput,
    // handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  })

  // const onSubmit = async (data: LoginFormData) => {
  //   try {
  //     const payload = {
  //       ...data,
  //       system: systemName
  //     }
  //     await dispatch(login(payload)).unwrap()
  //     reset()
  //     navigate('/')
  //   } catch {
  //     //erro tratado no slice (auth.error)
  //   }
  // }

  const onSubmitTest = async () => {
    try {
      const payload = {
        email: user,
        password: senha,
        system: systemName
      }

      await dispatch(login(payload)).unwrap()
      reset()
      navigate('/')
    } catch {
      //erro tratado no slice (auth.error)
    }
  }

  return (
    <form onSubmit={onSubmitTest}>
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
