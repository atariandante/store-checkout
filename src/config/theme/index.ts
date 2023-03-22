import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      100: '#E6E8E9',
      400: '#535C67',
      600: '#848A92',
      light: '#3A4451',
      main: '#091625',
    },
  },

  typography: {
    fontFamily: ['Open Sans'].join(','),
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 4,
})
