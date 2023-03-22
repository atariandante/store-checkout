import React, { FC } from 'react'
import { Fade, Box, BoxProps, CircularProgress } from '@mui/material'

import { IntrinsicImg } from '../../types'

export type ImageProps = Omit<IntrinsicImg, 'ref'> & {
  sx?: BoxProps['sx']
  ref?: BoxProps['ref']
}

// Lazy loaded image compnent with Loading state while retreaving the image
export const Image: FC<ImageProps> = ({ src, width, height, sx, ...props }) => {
  const [loading, setLoading] = React.useState(true)

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: 1,
        backgroundColor: 'primary.100',
        position: 'relative',
      }}
    >
      <Fade in={loading}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <CircularProgress color="primary" size="20px" />
        </Box>
      </Fade>

      <Box
        src={src}
        component="img"
        loading="lazy"
        onLoad={handleLoad}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 1,
          ...sx,
        }}
        {...props}
      />
    </Box>
  )
}
