import React, { FC } from 'react'
import { Box, BoxProps } from '@mui/material'

import logo from '../../logo.svg'

export type LogoProps = BoxProps

export const Logo: FC<LogoProps> = ({ sx, ...props }) => {
  return (
    <Box
      src={logo}
      component="img"
      sx={{
        '@keyframes spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },

        '@media (prefers-reduced-motion: no-preference)': {
          animation: 'spin infinite 20s linear',
        },

        width: 40,
        height: 40,
        ...sx,
      }}
      {...props}
    />
  )
}
