import React, { FC } from 'react'
import {
  Link,
  Stack,
  StackProps,
  Typography,
  getLinkUtilityClass,
} from '@mui/material'

import { Logo } from '../Logo'
import { SocialBubble } from '../SocialBubble'
import { getFooterLinks } from '../../utils'
import { useBreakpoints } from '../../hooks'

export type FooterProps = StackProps & {}

export const Footer: FC<FooterProps> = ({ sx, ...props }) => {
  const { isMobile, isSlim } = useBreakpoints()
  const { company, help, info } = getFooterLinks()

  return (
    <Stack
      direction="column"
      spacing={28}
      sx={{ px: 6, py: 15, backgroundColor: 'primary.100', ...sx }}
      {...props}
    >
      <Stack direction={isMobile || isSlim ? 'column' : 'row'} spacing={5}>
        <Stack sx={{ flex: 1 }} direction="column" spacing={5}>
          <Logo />

          <Typography
            sx={{
              color: 'primary.400',
            }}
          >
            We sell custom products for all your needs. Packs and bulk products
            that you will enjoy.
          </Typography>

          <Typography color="primary">+1 234 567 890</Typography>

          {/* Socials */}
          <Stack direction="row" spacing={2}>
            <SocialBubble type="facebook" />
            <SocialBubble type="twitter" />
            <SocialBubble type="instagram" />
            <SocialBubble type="linkedin" />
            <SocialBubble type="youtube" />
          </Stack>
        </Stack>

        <Stack sx={{ flex: 1 }} direction="column" spacing={6}>
          <Typography
            fontWeight="700"
            sx={{
              color: 'primary.main',
            }}
          >
            {company.title}
          </Typography>

          {company.links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              sx={{
                color: 'primary.400',
                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>

        <Stack sx={{ flex: 1 }} direction="column" spacing={6}>
          <Typography
            fontWeight="700"
            sx={{
              color: 'primary.main',
            }}
          >
            {help.title}
          </Typography>

          {help.links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              sx={{
                color: 'primary.400',
                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>

        <Stack sx={{ flex: 1 }} direction="column" spacing={6}>
          <Typography
            fontWeight="700"
            sx={{
              color: 'primary.main',
            }}
          >
            {info.title}
          </Typography>

          {info.links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              sx={{
                color: 'primary.400',
                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            color: 'primary.400',
          }}
        >
          © 2021 All rights reserved
        </Typography>

        <Stack direction="row" spacing={2}>
          Region: <Typography color="primary">USA</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
