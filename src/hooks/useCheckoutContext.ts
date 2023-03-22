import { useContext } from 'react'

import { CheckoutContext } from '../providers'

export const useCheckoutContext = () => {
  return useContext(CheckoutContext)
}
