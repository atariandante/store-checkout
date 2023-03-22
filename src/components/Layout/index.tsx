import React, { FC } from 'react'
import { AppBar, Box } from '@mui/material'

import { Navbar } from '../Navbar'
import { Toolbar } from '../Toolbar'
import { Footer } from '../Footer'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
        }}
      >
        <Toolbar />
        <Navbar />
      </AppBar>

      <Box component="main">{children}</Box>

      <Footer />
    </>
  )
}
