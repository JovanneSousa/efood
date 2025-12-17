import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { registerUserScheme } from '../../Validations/registerUserScheme'
import { register, type RegisterFormData } from '../../store/reducers/auth'
import { systemName } from '../../services/systemName'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const FormRegister = () => {
  const { error } = useSelector((state: RootReducer) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerUserScheme)
  })

  const onSubmit = async (data: RegisterFormData) => {
    const payload = {
      ...data,
      systemName,
      profile: 'usuario'
    }

    try {
      await dispatch(register(payload)).unwrap()
      reset()
      navigate('/')
    } catch {
      // erro tratado no slice (auth.error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="name">Nome</label>
        <input type="email" id="name" {...registerInput('nome')} />
        <span>{errors.email?.message}</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...registerInput('email')}
          placeholder="seu@email.com"
        />
        <span>{errors.email?.message}</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Senha</label>
        <input type="password" {...registerInput('password')} id="password" />
        <span>{errors.password?.message || error}</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor="confirmPassword">Confirme a senha</label>
        <input
          type="password"
          {...registerInput('confirmPassword')}
          id="confirmPassword"
        />
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

export default FormRegister
