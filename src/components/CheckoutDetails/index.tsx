import { Stack, StackProps } from '@mui/material'
import React, { FC } from 'react'

import { ProductSummaryCard } from '../ProductSummaryCard'
import { useCheckoutContext } from '../../hooks'

export type CheckoutDetailsProps = StackProps & {}

export const CheckoutDetails: FC<CheckoutDetailsProps> = ({ ...props }) => {
  const { products, handleRemoveProduct, handleOperateProductQuantity } =
    useCheckoutContext()

  return (
    <Stack direction="column" spacing={5} {...props}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          '& > * + *': {
            borderTop: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {products.map((product) => {
          return (
            <ProductSummaryCard
              {...product}
              key={product.id}
              onRemove={(product) => handleRemoveProduct(product.id)}
              onChangeQuantity={(product, quantity) =>
                handleOperateProductQuantity(product.id, quantity)
              }
            />
          )
        })}
      </Stack>
    </Stack>
  )
}
