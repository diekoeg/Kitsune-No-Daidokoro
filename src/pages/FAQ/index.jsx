import React from 'react'
import Layout from '../../components/Layout'
import { Accordion } from 'react-bootstrap'

function Faq() {
  return (
    <Layout>
      <h1 className='pt-10 text-5xl'>
        Preguntas Frecuentes
      </h1>
      <Accordion defaultActiveKey='0' flush className='w-full h-auto px-5'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Dónde está ubicado Kitsune no Daidokoro?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Estamos ubicados en Plaza lindavista, ofreciendo un ambiente acogedor con un toque tradicional japonés.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Cuál es el horario de atención?
          </Accordion.Header>
          <Accordion.Body className='visible'>
            Nuestro horario es de lunes a domingo, de 12:00 PM a 10:00 PM.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Ofrecen opciones vegetarianas o veganas?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Sí, tenemos una variedad de opciones vegetarianas y veganas, incluyendo sushi vegetariano, ramen de tofu, y tempura de verduras.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Es necesario hacer una reservación?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Aunque aceptamos clientes sin reserva, recomendamos hacer una reservación especialmente los fines de semana para asegurar su mesa.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Cómo puedo hacer una reservación?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Puede hacer una reservación llamándonos al 1122334455 o visitando nuestra página web.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Ofrecen servicio a domicilio?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Sí, ofrecemos servicio a domicilio a través de diferentes plataformas de delivery y también puede ordenar directamente desde nuestro sitio web.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Cuáles son los métodos de pago aceptados?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Aceptamos efectivo, tarjetas de crédito y débito (Visa, MasterCard).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='7'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Ofrecen menús para niños?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Sí, tenemos un menú especial para niños con opciones suaves y deliciosas adaptadas para los más pequeños.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='8'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Es posible celebrar eventos privados en el restaurante?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Sí, ofrecemos servicios para eventos privados como cenas de empresa y celebraciones familiares. Contacte con nuestro equipo para más información sobre la disponibilidad y los detalles.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='9'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Cómo garantizan la calidad y frescura de los ingredientes?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Trabajamos con proveedores de confianza y revisamos constantemente la calidad de nuestros ingredientes, que son frescos y auténticos para asegurar la mejor experiencia gastronómica.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='10'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Tienen opciones de bebidas alcohólicas?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Sí, ofrecemos una variedad de bebidas alcohólicas, incluyendo sake, cerveza japonesa y cócteles especiales.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Layout>
  )
}

export {Faq}