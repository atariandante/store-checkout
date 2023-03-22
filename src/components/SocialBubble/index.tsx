import React, { FC } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getSocialIconType } from '../../utils'

export type SocialBubbleProps = Omit<IconButtonProps, 'type'> & {
  type: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
}

export const SocialBubble: FC<SocialBubbleProps> = ({ sx, type, ...props }) => {
  const Icon = getSocialIconType(type)

  return (
    <IconButton
      size="small"
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '50%',
        color: 'white',

        '&:hover': {
          color: 'primary.main',
        },

        ...sx,
      }}
      {...props}
    >
      <Icon fontSize="small" />
    </IconButton>
  )
}
