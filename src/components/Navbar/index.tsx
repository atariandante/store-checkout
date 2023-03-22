import { Button, IconButton, Stack } from '@mui/material'
import React, { FC } from 'react'
import { ShoppingBag as ShoppingBagIcon } from '@mui/icons-material'

import { useBreakpoints, useDrawerContext } from '../../hooks'

const routes = [
  {
    label: 'All products',
  },
  {
    label: 'Packaging',
  },
]

export type NavbarProps = {}

export const Navbar: FC<NavbarProps> = () => {
  const { isMobile, isSlim } = useBreakpoints()
  const { handleToggle } = useDrawerContext()

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      sx={{
        backgroundColor: 'primary.100',
        px: 6,
        py: 3,
      }}
    >
      <Stack direction="row" spacing={2}>
        {routes.map((route) => {
          return (
            <Button
              variant="text"
              key={route.label}
              sx={{
                color: 'primary.400',
              }}
            >
              {route.label}
            </Button>
          )
        })}
      </Stack>

      {(isMobile || isSlim) && (
        <IconButton size="small" onClick={() => handleToggle()}>
          <ShoppingBagIcon />
        </IconButton>
      )}
    </Stack>
  )
}
