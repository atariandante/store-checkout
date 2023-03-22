import React, { FC } from 'react'
import {
  Button,
  Chip,
  Divider,
  Stack,
  StackProps,
  Typography,
} from '@mui/material'
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material'

import { Image } from '../Image'
import { toMoney } from '../../utils'
import { type Product } from '../../types'
import { QuantitySelector } from '../QuantitySelector'

export type ProductSummaryCardProps = Omit<StackProps, 'id'> &
  Product & {
    onRemove?: (product: Product) => void
    onChangeQuantity?: (product: Product, quantity: number) => void
  }

export const ProductSummaryCard: FC<ProductSummaryCardProps> = ({
  id,
  sx,
  onRemove,
  onChangeQuantity,
  is_pack,
  ...props
}) => {
  const { name, price, image, description, quantity, category, products } =
    props

  const product: Product = {
    id,
    name,
    price,
    image,
    description,
    quantity,
    category,
    is_pack,
    products,
  }

  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="flex-start"
      sx={{
        py: 4,
        ...sx,
      }}
      {...props}
    >
      <Stack direction="column" spacing={2} alignItems="center">
        <Image src={image} sx={{ width: 120, height: 120 }} />

        {is_pack && (
          <Chip
            sx={{
              maxWidth: 50,
              borderRadius: 0,
              color: 'primary.600',

              '& .MuiChip-label': {
                padding: 2,
              },
            }}
            label="PACK"
          />
        )}
      </Stack>

      <Stack direction="column" spacing={1} flex={1}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight="700">
            {name}
          </Typography>

          <Typography variant="h6" fontWeight="700">
            {toMoney(price)}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          {/* Quantity selector*/}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2" color="textSecondary">
              Quantity:
            </Typography>

            {onChangeQuantity && (
              <QuantitySelector
                value={quantity}
                onChange={({ target }) =>
                  onChangeQuantity(product, target.value as number)
                }
              />
            )}

            {!onChangeQuantity && (
              <Typography variant="body1" fontWeight="700">
                {quantity}
              </Typography>
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h6">Total:</Typography>

            <Typography variant="h6" fontWeight="700">
              {toMoney(price * quantity)}
            </Typography>
          </Stack>
        </Stack>

        {is_pack && (
          <Stack direction="column" spacing={2}>
            {products && products.length > 0 && (
              <Stack component="ul" sx={{ pl: 5, my: 2 }}>
                {products.map((product) => (
                  <Typography component="li" variant="body2" fontWeight="600">
                    {product.name}
                  </Typography>
                ))}
              </Stack>
            )}

            <Stack direction="row" alignItems="center" spacing={1}>
              <Button variant="text" size="small">
                Edit pack
              </Button>

              {onRemove && (
                <>
                  <Divider orientation="vertical" />

                  <Button
                    variant="text"
                    size="small"
                    onClick={() => onRemove(product)}
                  >
                    Remove
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
        )}

        {!is_pack && onRemove && (
          <Stack direction="row" spacing={2}>
            {onRemove && (
              <Button
                size="small"
                variant="text"
                startIcon={<DeleteOutlineIcon />}
                onClick={() => onRemove(product)}
              >
                Remove
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
