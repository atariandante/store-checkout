import React, { FC } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'

import {
  Page,
  PageProps,
  Section,
  CheckoutSummary,
  CheckoutDetails,
  RecommendedProducts,
  ResponsivePanel,
} from '../../components'
import { CheckoutConsumer, CheckoutProvider } from '../../providers'
import { useDrawerContext } from '../../hooks'

export type CheckoutPageProps = PageProps & {}

export const CheckoutPage: FC<CheckoutPageProps> = () => {
  const { isOpen, handleToggle } = useDrawerContext()

  return (
    <CheckoutProvider>
      <Page>
        <Stack direction="row" spacing={2}>
          <CheckoutConsumer>
            {(checkout) => {
              const { products } = checkout
              const totalProducts = products.length

              return (
                <>
                  <Section
                    spacing={5}
                    title="Your cart"
                    label={`(${totalProducts})`}
                    sx={{ flex: 1 }}
                  >
                    <CheckoutDetails />
                  </Section>

                  <ResponsivePanel open={isOpen} onClose={() => handleToggle()}>
                    <Box sx={{ position: 'relative', width: 350 }}>
                      <Section
                        title="Checkout"
                        spacing={5}
                        description={
                          <Stack direction="row" justifyContent="space-between">
                            <Typography
                              color="textSecondary"
                              variant="subtitle1"
                            >
                              Number of items
                            </Typography>
                            <Typography
                              color="textSecondary"
                              variant="subtitle1"
                            >
                              {totalProducts}
                            </Typography>
                          </Stack>
                        }
                        sx={{
                          position: 'sticky',
                          width: 350,
                        }}
                      >
                        <Divider />

                        <CheckoutSummary />
                      </Section>
                    </Box>
                  </ResponsivePanel>
                </>
              )
            }}
          </CheckoutConsumer>
        </Stack>

        <Section title="You may also like">
          <RecommendedProducts />
        </Section>
      </Page>
    </CheckoutProvider>
  )
}
