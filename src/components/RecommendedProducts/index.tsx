import React from 'react'
import { Stack } from '@mui/material'

import { ProductPreviewCard } from '../ProductPreviewCard'
import { generateMockProducts } from '../../utils'
import { useBreakpoints } from '../../hooks'

export const RecommendedProducts = () => {
  const { isMobile, isSlim } = useBreakpoints()
  const recommended = generateMockProducts(isMobile || isSlim ? 1 : 4)

  return (
    <Stack direction="row" spacing={4}>
      {recommended.map(({ id, ...recommended }) => (
        <ProductPreviewCard
          sx={{ flex: 1 }}
          key={id}
          id={String(id)}
          {...recommended}
        />
      ))}
    </Stack>
  )
}
