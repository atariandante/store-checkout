import { useMemo, useState, useCallback } from 'react'

import { Product } from '../types'
import { generateMockProducts } from '../utils'

export type CheckoutState = {
  products: Product[]
  handleRemoveProduct: (id: number) => void
  handleOperateProductQuantity: (id: number, quantity: number) => void
}

export const initialCheckoutState = {
  products: generateMockProducts(4),
  handleRemoveProduct: () => {},
  handleOperateProductQuantity: () => {},
}

export const useCheckout = (): CheckoutState => {
  const [products, setProducts] = useState<Product[]>(
    initialCheckoutState.products
  )

  const handleRemoveProduct = useCallback(
    (id: number) => {
      console.log({ id })
      setProducts(products.filter((product) => product.id !== id))
    },
    [products]
  )

  const handleOperateProductQuantity = useCallback(
    (id: number, quantity: number) => {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity,
            }
          }

          return product
        })
      )
    },
    [products]
  )

  return useMemo(
    () => ({
      products,

      handleRemoveProduct,
      handleOperateProductQuantity,
    }),
    [products, handleRemoveProduct, handleOperateProductQuantity]
  )
}
