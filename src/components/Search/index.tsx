import React, { FC } from 'react'
import { TextField, TextFieldProps, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

export type SearchProps = TextFieldProps & {}

export const Search: FC<SearchProps> = ({
  InputProps,
  sx,
  placeholder = 'Search products...',
  ...props
}) => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
        ...InputProps,
      }}
      sx={{
        '& .MuiInputBase-root': {
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: (theme) => theme.shape.borderRadius * 2,
          overflow: 'hidden',
        },

        '& .MuiInputBase-input': {
          py: 3,
          height: (theme) => theme.spacing(4),
        },

        ...sx,
      }}
      placeholder={placeholder}
      {...props}
    />
  )
}
