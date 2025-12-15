import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
<<<<<<< HEAD
import { type Restaurante } from '../Pages/Home'
=======
import { Restaurante } from '../Pages/Home'
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11

type Product = {
  id: number
  price: number
}

type PurchaseResponse = {
  orderId: string
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, usePurchaseMutation } = api

export default api
