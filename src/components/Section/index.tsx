import { Stack, Box, StackProps, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

export type SectionProps = StackProps & {
  title: string
  label?: string
  description?: string | ReactNode
}

export const Section: FC<SectionProps> = ({
  label,
  title,
  children,
  description,
  ...props
}) => {
  return (
    <Stack direction="column" spacing={2} {...props}>
      <Stack direction="row" spacing={1}>
        <Typography
          color="primary"
          variant="h5"
          sx={{
            fontWeight: 'bold',
            gap: 1,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {title}

          {label && (
            <Typography component="span" color="textSecondary">
              {label}
            </Typography>
          )}
        </Typography>
      </Stack>

      {typeof description === 'string' ? (
        <Typography color="textSecondary" variant="body2" sx={{ m: 0 }}>
          {description}
        </Typography>
      ) : (
        description
      )}

      {children}
    </Stack>
  )
}
