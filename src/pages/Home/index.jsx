import React from 'react'
import Layout from '../../components/Layout'
import { CarouselHome } from '../../components/CarouselHome'
import { InfoCard } from '../../components/infoCard'
import { CardContainer } from '../../components/CardContainer'

function Home() {

  const imgPlaceHolder = "https://placehold.co/600x600"
  const img1 = new URL('/src/assets/imagen1.webp',import.meta.url).href
  const img2 = new URL('/src/assets/imagen2.webp',import.meta.url).href
  const img3 = new URL('/src/assets/ramen.webp',import.meta.url).href
  let infoCards = ([
    {
      img:img1,
      title:'¡Bienvenido a Kitsune no Daidokoro!',
      text:'Somos Kitsune no Daidokoro, un restaurante de temática japonesa ubicado en el corazón de la ciudad, ofreciendo una auténtica experiencia culinaria japonesa combinada con un ambiente culturalmente enriquecedor. Nuestro objetivo es proporcionar a nuestros clientes una experiencia gastronómica única, basada en la alta calidad de los ingredientes y una presentación meticulosa, característicos de la cocina japonesa.',
      isRight:true,
      color:'bg-orange-200'
    },
    {
      img:imgPlaceHolder,
      title:'¡Conoce al equipo detrás de Kitsune No Daidokoro!',
      text:'Somos un par de emprendedores que estamos buscando ofrecer una experiencia grata de comida a nuestros clientes, siempre buscando la autenticidad que tanto caracteriza a Japón.',
      isRight:false,
      color:'bg-yellow-200'
    },
    {
      img:img3,
      title:'¡Echa un vistazo a nuestro menú!',
      text:'Descubre un festín para tus sentidos con nuestra exquisita selección de platos. En nuestro menú encontrarás una cuidadosa combinación de sabores tradicionales y toques modernos, que deleitarán tanto a los conocedores de la cocina japonesa como a los nuevos exploradores.',
      isRight:true,
      color:'bg-red-200'
    },
    {
      img:img2,
      title:'¡Un nuevo tipo de experciencia sobre la cultura japonesa!',
      text:'¡Sumérgete en una experiencia que va más allá de lo culinario! En nuestro restaurante, no solo degustarás la mejor comida japonesa, sino que vivirás la esencia de Japón. Conoce nuestros eventos temáticos, las ceremonias de té, las noches de karaoke y más.',
      isRight:false,
      color:'bg-blue-200'
    },
  ])
  return (
    <Layout>
      <h1 className='my-5 pt-5 text-4xl sm:text-6xl text-center font-bold'> 
        ¡BIENVENIDO A KITSUNE NO DAIDOKORO! 
      </h1>
      <CarouselHome />
      <hr className='border-1 border-black border-solid w-full'/>
      <CardContainer>
        {infoCards.map(card => (
          <InfoCard 
          key={card.title}
          img={card.img}
          title={card.title}
          text={card.text}
          isRight={card.isRight}
          color={card.color}/>
        ))
        }
      </CardContainer>
    </Layout>
  )
}

export {Home}