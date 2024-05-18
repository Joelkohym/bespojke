import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'At BespoJKe, our vision is to create a world where parenthood is made simpler, safer, and more enjoyable through innovative, food-grade silicone baby products. We aspire to be the trusted companion on the incredible journey of parenthood, offering high-quality, eco-friendly, and thoughtfully designed solutions that enhance the well-being of both babies and parents.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      "BespoJKe is on a mission to provide safe, innovative, and sustainable baby products. We prioritize safety, innovate for convenience, and maintain eco-friendly practices. We empower parents with knowledge and ensure exceptional quality. In essence, BespoJKe makes parenting easier, safer, and more sustainable, ensuring peace of mind for parents and a brighter future for our little ones.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Founded in 2023, BespoJKe was created by Joel, aiming to make parenting a joyous experience. Starting as a small family business, we crafted safe silicone baby products. Growing demand led to expansion, and we collaborated with experts to create innovative designs. Today, we offer a range of baby products, all made from food-grade silicone, with a commitment to safety and sustainability. We continue to make parenting more enjoyable for families worldwide.',
  },
]


export const products_url = 'https://d3s9sj5ctusn2w.cloudfront.net/bespojke_products'
//export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = 'https://d3s9sj5ctusn2w.cloudfront.net/bespojke_single_products/'
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`
