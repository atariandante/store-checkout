import React, { useContext } from 'react'

import { DrawerContext } from '../providers/DrawerProvider'

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}
