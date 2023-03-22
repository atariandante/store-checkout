import { useMediaQuery } from '@mui/material'
import { slim, mobile, desktop, wide } from '../utils'

export const useBreakpoints = () => ({
  isSlim: useMediaQuery(slim),
  isMobile: useMediaQuery(mobile),
  isDesktop: useMediaQuery(desktop),
  isWide: useMediaQuery(wide),
})
