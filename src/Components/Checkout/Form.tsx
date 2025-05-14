import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'
import {
  resetCheckout,
  setInDelivery,
  setIsFinished,
  setOrderId
} from '../../store/reducers/checkout'

import { InputGroup } from './styles'
import { RootReducer } from '../../store'
import { getTotalPrice } from '../../utils'
import { formataPreco } from '../ListaProdutos'
import { useState } from 'react'

const DeliveryForm = () => {
  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()
  const { inDelivery } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const backToCart = () => {
    dispatch(resetCheckout())
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((value, schema) =>
          !inDelivery ? schema.required('O campo é obrigatório') : schema
        ),
      cardNumber: Yup.string()
        .min(19, 'O campo deve possuir 19 caracteres')
        .max(19, 'O campo deve possuir 19 caracteres')
        .when((value, schema) =>
          !inDelivery ? schema.required('O campo é obrigatório') : schema
        ),
      cardCode: Yup.string()
        .min(3, 'O campo deve possuir 3 caracteres')
        .max(3, 'O campo deve possuir 3 caracteres')
        .when((value, schema) =>
          !inDelivery ? schema.required('O campo é obrigatório') : schema
        ),
      expiresMonth: Yup.string()
        .min(2, 'Insira um numero válido')
        .max(2, 'Insira um numero válido')
        .when((value, schema) =>
          !inDelivery ? schema.required('O campo é obrigatório') : schema
        ),
      expiresYear: Yup.string()
        .min(2, 'Insira um numero válido')
        .max(2, 'Insira um numero válido')
        .when((value, schema) =>
          !inDelivery ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: async (values) => {
      if (inDelivery) {
        dispatch(setInDelivery())
      }

      try {
        const res = await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.name,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.cep,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }).unwrap()
        dispatch(setOrderId(res.orderId))
        dispatch(setIsFinished(true))
      } catch (error) {
        alert('Erro ao finalizar o pedido')
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const toggleForm = () => {
    dispatch(setInDelivery())
  }

  return (
    <>
      <h4>
        {inDelivery
          ? 'Entrega'
          : `Pagamento - Valor a pagar ${formataPreco(getTotalPrice(items))}`}
      </h4>
      <form onSubmit={form.handleSubmit}>
        {inDelivery ? (
          <>
            <InputGroup>
              <label htmlFor="name">Quem irá receber</label>
              <input
                id="name"
                type="text"
                value={form.values.name}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('name') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                value={form.values.address}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                value={form.values.city}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </InputGroup>
            <div className="flex">
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  type="text"
                  value={form.values.cep}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('cep') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Numero</label>
                <input
                  id="number"
                  type="text"
                  value={form.values.number}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </InputGroup>
            </div>
            <InputGroup>
              <label htmlFor="complement">
                Complemento <span>(opcional)</span>
              </label>
              <input
                id="complement"
                type="text"
                value={form.values.complement}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </InputGroup>
          </>
        ) : (
          <>
            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardName}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </InputGroup>
            <div className="flex">
              <InputGroup className="flex70">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardCode}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </InputGroup>
            </div>
            <div className="flex">
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.expiresMonth}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.expiresYear}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                />
              </InputGroup>
            </div>
          </>
        )}

        {inDelivery ? (
          <Button type="button" onClick={toggleForm}>
            Continuar com o pagamento
          </Button>
        ) : undefined}
        {!inDelivery ? (
          <Button type="submit">Finalizar pagamento</Button>
        ) : undefined}
        {inDelivery ? (
          <Button onClick={backToCart}>Voltar para o carrinho</Button>
        ) : (
          <Button onClick={toggleForm}>Voltar para a edição de endereço</Button>
        )}
      </form>
    </>
  )
}

export default DeliveryForm
