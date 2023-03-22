import React, { type FC, type ReactNode, createContext, useState } from 'react'

export type DrawerProviderProps = {
  children: ReactNode
}

export const DrawerContext = createContext({
  isOpen: false,
  handleToggle: () => {},
})

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DrawerContext.Provider value={{ isOpen, handleToggle }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const CheckoutConsumer = DrawerContext.Consumer
