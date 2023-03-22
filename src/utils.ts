import { Product } from './types'
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { theme } from './config/theme'

export const createFakeProduct = (i: number) => ({
  id: i,
  name: i === 0 ? `Pack ${i}` : `Product ${i}`,
  price: 100,
  description: 'Lorem ipsum dolor sit amet',
  category: 'Category',
  image: 'https://picsum.photos/200',
  quantity: 1,
  is_pack: i === 0,
})

export const generateMockProducts = (count: number) => {
  const products: Product[] = []

  for (let i = 0; i < count; i++) {
    const product = createFakeProduct(i)
    products.push(product)
  }

  products[0].products = [createFakeProduct(0)]

  return products
}

export const getSocialIconType = (social: string) => {
  switch (social) {
    case 'facebook':
      return Facebook

    case 'twitter':
      return Twitter

    case 'instagram':
      return Instagram

    case 'linkedin':
      return LinkedIn

    case 'youtube':
      return YouTube

    default:
      throw new Error('getSocialIconType: Invalid social type')
  }
}

export const getFooterLinks = () => {
  return {
    company: {
      title: 'Our company',
      links: [
        { title: 'About us', url: '#' },
        { title: 'FAQ', url: '#' },
        { title: 'Partnerships', url: '#' },
        { title: 'Sustainability', url: '#' },
        { title: 'Blog', url: '#' },
      ],
    },
    help: {
      title: 'How can we help',
      links: [
        { title: 'Place a ticket', url: '#' },
        { title: 'Track your order', url: '#' },
        { title: 'Help center', url: '#' },
      ],
    },
    info: {
      title: 'Information',
      links: [
        { title: 'Contact us', url: '#' },
        { title: 'Live chat', url: '#' },
        { title: 'Privacy', url: '#' },
        { title: 'Intellectual Property', url: '#' },
        { title: 'Terms of use', url: '#' },
      ],
    },
  }
}

export const toMoney = (value: number) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const slim = theme.breakpoints.down('xs')
export const mobile = theme.breakpoints.down('sm')
export const tablet = theme.breakpoints.up('md')
export const desktop = theme.breakpoints.up('lg')
export const wide = theme.breakpoints.up('xl')
