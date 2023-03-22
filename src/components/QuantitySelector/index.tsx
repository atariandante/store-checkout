import React, { type FC } from 'react'
import { FormControl, Select, MenuItem, SelectProps } from '@mui/material'

export type QuantitySelectorProps = SelectProps

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  value,
  ...props
}) => {
  return (
    <FormControl
      sx={{
        m: 1,
        '& .MuiSelect-select': {
          pb: 0,
          pr: 5,
        },
      }}
      size="small"
      variant="standard"
    >
      <Select value={value} {...props}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={40}>40</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  )
}
