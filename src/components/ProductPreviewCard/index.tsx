import {
  Card,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
  Stack,
  Box,
} from '@mui/material'
import React, { FC } from 'react'

import { Product } from '../../types'
import { Image } from '../Image'
import { toMoney } from '../../utils'

export type ProductPreviewCardProps = Omit<Product, 'id'> & CardProps & {}

export const ProductPreviewCard: FC<ProductPreviewCardProps> = ({
  image,
  name,
  price,
  sx,
  elevation = 0,
  quantity,
  ...props
}) => {
  return (
    <Card sx={{ borderRadius: 0.5, ...sx }} elevation={0} {...props}>
      <CardMedia component={Image} sx={{ height: 320 }} image={image} />
      <CardContent>
        <Typography fontWeight="700" variant="body2">
          {name}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: '700' }}>
            {toMoney(price)}
          </Typography>

          <Typography
            color="textSecondary"
            variant="subtitle1"
            sx={{ flex: 1 }}
          >
            Minimun:{' '}
            <Box component="span" sx={{ color: 'primary' }}>
              {quantity}
            </Box>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
