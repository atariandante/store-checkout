import React, { FC } from 'react'
import { Stack, StackProps } from '@mui/material'

export type PageProps = StackProps & {}

export const Page: FC<PageProps> = ({ children, sx, ...props }) => {
  return (
    <Stack
      component="section"
      direction="column"
      spacing={4}
      sx={{
        pt: 39,
        px: 7,
        pb: 7,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Stack>
  )
}
