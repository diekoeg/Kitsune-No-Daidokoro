import React from 'react'
import Layout from '../../components/Layout'
import { Image } from 'react-bootstrap'

function Menu() {
  const img1 = new URL('/src/assets/1.webp',import.meta.url).href
  const img2 = new URL('/src/assets/2.webp',import.meta.url).href
  return (
    <Layout>
      <Image src={img1}/>
      <Image src={img2}/>
    </Layout>
  )
}

export {Menu}