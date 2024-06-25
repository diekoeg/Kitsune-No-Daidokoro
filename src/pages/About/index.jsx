import React from 'react'
import Layout from '../../components/Layout'
import { AboutContainer } from '../../components/AboutContainer'
import { TeammatesContainer } from '../../components/TeammatesContainer'

function About() {
  return (
    <Layout>
      <AboutContainer />
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 id='team' className='text-5xl font-[Agbalumo]'>¡Conoce a nuestro equipo!</h1>
      <TeammatesContainer/>
      <hr className='border-1 border-black border-solid w-full'/>
    </Layout>
  )
}

export {About}