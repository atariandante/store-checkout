import { type ComponentProps } from 'react'

export type Product = {
  id: number
  name: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
  is_pack?: boolean
  products?: Product[]
}

export type IntrinsicImg = ComponentProps<'img'>
