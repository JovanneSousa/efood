import { useDispatch } from 'react-redux'
import Button from '../Button'
import { login } from '../../store/reducers/auth'
import type { AppDispatch } from '../../store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const user = import.meta.env.VITE_USERNAME

const senha = import.meta.env.VITE_PASSWORD

const FormLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const fazLogin = async (e: React.FormEvent) => {
    const data = {
      email: user,
      password: senha
    }

    e.preventDefault()

    await dispatch(login(data))
    navigate('/')
  }

  return (
    <form onSubmit={fazLogin}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
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
