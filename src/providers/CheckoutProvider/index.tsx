import React, { type FC, type ReactNode, createContext } from 'react'

import { useCheckout, CheckoutState, initialCheckoutState } from '../../hooks'

export type CheckoutProviderProps = {
  children: ReactNode
}

export const CheckoutContext =
  createContext<CheckoutState>(initialCheckoutState)

export const CheckoutProvider: FC<CheckoutProviderProps> = ({ children }) => {
  const checkoutState = useCheckout()

  console.log({
    checkoutState,
  })

  return (
    <CheckoutContext.Provider value={checkoutState}>
      {children}
    </CheckoutContext.Provider>
  )
}

export const CheckoutConsumer = CheckoutContext.Consumer
