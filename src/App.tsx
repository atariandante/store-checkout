import React from 'react'
import './App.css'

import { Layout } from './components'
import { CheckoutPage } from './pages'
import { DrawerProvider } from './providers/DrawerProvider'

function App() {
  return (
    <DrawerProvider>
      <Layout>
        <CheckoutPage />
      </Layout>
    </DrawerProvider>
  )
}

export default App
