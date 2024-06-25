import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function CarouselHome() {
  const img1 = 'https://placehold.co/900x400'
  const img2 = 'https://placehold.co/900x300'

  return (
    <div className='w-full md:w-4/6'>
      <Carousel fade>
        <Carousel.Item>
          <Image src={img1}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img2} />
        </Carousel.Item>
      </Carousel>
    </div>
    
  )
}

export {CarouselHome}