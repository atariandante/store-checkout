import { Typography, Button, Stack, StackProps } from '@mui/material'
import React, { useMemo, FC } from 'react'

import { useCheckoutContext } from '../../hooks'
import { toMoney } from '../../utils'

export type CheckoutSummaryProps = StackProps & {}

export const CheckoutSummary: FC<CheckoutSummaryProps> = ({ ...props }) => {
  const { products } = useCheckoutContext()

  const total = useMemo(
    () =>
      products.reduce((acc, product) => {
        return acc + product.price * product.quantity
      }, 0),
    [products]
  )

  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
          Subtotal
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: '700',
          }}
        >
          {toMoney(total)}
        </Typography>
      </Stack>

      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{
          fontWeight: '700',
        }}
      >
        Proceed to Checkout
      </Button>

      <Button
        variant="outlined"
        size="large"
        color="primary"
        sx={{
          borderWidth: 2,
          borderColor: 'primary.main',
          fontWeight: '700',

          '&:hover': {
            borderWidth: 2,
          },
        }}
      >
        Continue shopping
      </Button>
    </Stack>
  )
}
