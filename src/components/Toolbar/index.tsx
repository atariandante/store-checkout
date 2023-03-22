import React, { FC } from 'react'
import {
  Toolbar as MUIToolbar,
  ToolbarProps as MUIToolbarProps,
  Button,
  Stack,
  ButtonProps,
} from '@mui/material'
import {
  PersonOutline as PersonOutlineIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
} from '@mui/icons-material'

import { Search } from '../Search'
import { Logo } from '../Logo'
import { useBreakpoints } from '../../hooks'

export type ToolbarProps = MUIToolbarProps & {}

export const Toolbar: FC<ToolbarProps> = ({ sx, ...props }) => {
  const breakpoints = useBreakpoints()
  const buttonStylesOverrides: ButtonProps['sx'] = {
    fontWeight: '400',
  }

  const isMobile = breakpoints.isMobile || breakpoints.isSlim

  return (
    <MUIToolbar
      sx={{
        justifyContent: 'space-between',
        gap: 3,

        '&.MuiToolbar-root': {
          px: (theme) => `${theme.spacing(6)} !important`,
        },

        ...sx,
      }}
      {...props}
    >
      <Logo />

      <Search sx={{ flex: 1, maxWidth: 696 }} />

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          color="inherit"
          startIcon={<PersonOutlineIcon fontSize="large" />}
          sx={buttonStylesOverrides}
        >
          {!isMobile && 'Sign In'}
        </Button>

        <Button
          variant="text"
          color="inherit"
          startIcon={<ShoppingBagOutlinedIcon fontSize="large" />}
          sx={buttonStylesOverrides}
        >
          {!isMobile && 'Cart'}
        </Button>
      </Stack>
    </MUIToolbar>
  )
}
