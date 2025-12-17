import * as yup from 'yup'
import { loginSchema } from './loginScheme'

export const registerUserScheme = loginSchema.shape({
  nome: yup
    .string()
    .required('O campo nome é obrigatório!')
    .min(2, 'O campo Nome deve ter entre 2 a 50 caracteres')
    .max(50, 'O campo Nome deve ter entre 2 a 50 caracteres'),

  confirmPassword: yup
    .string()
    .required('O campo confirme a senha é obrigatório')
    .oneOf([yup.ref('password')], 'As senhas não conferem')
})
