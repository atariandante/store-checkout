import React, { type FC, ReactElement } from 'react'

import { Box, Drawer, DrawerProps } from '@mui/material'

import { useBreakpoints } from '../../hooks'

export type ResponsivePanelProps = Omit<DrawerProps, 'children'> & {
  children: ReactElement
}

export const ResponsivePanel: FC<ResponsivePanelProps> = ({
  anchor = 'right',
  children,
  ...props
}) => {
  const { isMobile, isSlim } = useBreakpoints()

  if (!isMobile && !isSlim) {
    return children
  }

  return (
    <Drawer anchor={anchor} {...props}>
      <Box sx={{ padding: 2 }}>{children}</Box>
    </Drawer>
  )
}
