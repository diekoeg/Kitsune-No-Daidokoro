import React from 'react'
import { AboutCard } from '../AboutCard'

function AboutContainer() {
  return (
    <div className='w-full py-10 flex flex-col'>      
      <AboutCard
        title='Nuestra historia.'
      />
        <p className='text-xl'>
          La idea de nuestro restaurante de comida japonesa, " Kitsune no Daidokoro", surgió a partir de un viaje transformador que realizamos a Japón en el verano de 2020. Siempre habíamos sentido una fascinación por la cultura japonesa, pero fue durante ese viaje cuando verdaderamente nos sumergimos en la esencia de su gastronomía
        </p>
        <br />
        <p className='text-xl'>
          Decidimos explorar más allá de las ciudades principales y viajamos a regiones rurales como Hokkaido y Kyoto, donde aprendimos sobre ingredientes locales y técnicas culinarias tradicionales de chefs y cocineros locales. Durante estas experiencias, no solo aprendimos recetas y métodos, sino que también entendimos la filosofía detrás de la comida japonesa: la importancia de la frescura de los ingredientes, la estética en la presentación, y la armonía de los sabores.
        </p>
        <br />
        <p className='text-xl'>
          Al regresar a México, supimos que nuestro destino estaba marcado. Queríamos compartir esa pasión y esas experiencias con nuestra comunidad. Sin embargo, también sabíamos que era fundamental hacerlo de una manera accesible para todos. Con esto en mente, nos embarcamos en la misión de crear un restaurante que no solo ofreciera comida japonesa auténtica, sino que también fuera asequible para todos los bolsillos.
        </p>
        <br />
        <p className='text-xl'>
          Después de meses de planificación, búsqueda de proveedores locales que pudieran garantizar ingredientes frescos y de calidad, y la recreación de recetas tradicionales con un toque innovador, " Kitsune no Daidokoro" abrió sus puertas en la Ciudad de México. Nuestro objetivo es ofrecer una experiencia gastronómica que transporte a nuestros clientes a Japón, sin tener que salir de su ciudad. Desde el sushi más fresco hasta el ramen más reconfortante, cada plato está preparado con el mismo amor y dedicación que encontramos en nuestro viaje.
        </p>
        <br />
        <p className='text-xl'>
          En " Kitsune no Daidokoro", creemos que la buena comida une a las personas y trasciende fronteras. Estamos comprometidos a ofrecer sabores auténticos a precios accesibles, para que todos puedan disfrutar de la magia de la gastronomía japonesa. Esta es nuestra pasión, este es nuestro proyecto de vida.
        </p>

        <AboutCard 
          title='Nuestra Misión'
          text='Kitsune no Daidokoro tiene por misión ofrecer una experiencia gastronómica japonesa auténtica, combinada con un ambiente acogedor y una atención al cliente excepcional, para satisfacer a los amantes de la cocina japonesa y atraer a nuevos entusiastas.'
        />

        <AboutCard 
          title='Nuestra Visión'
          text='Nuestra visión es ser reconocidos como uno de los principales destinos culinarios japoneses en la región, y ser reconocidos por la autenticidad de nuestra cocina, la calidad de nuestros ingredientes y la excelencia en el servicio. En Kitsune no Daidokoro aspiramos a crear un espacio donde la gastronomía japonesa y la cultura se fusionen, ofreciendo a nuestros clientes una experiencia completa y memorable.'
        />

        <AboutCard
          title='Nuestros valores.'
        />
        <ul className='text-xl list-disc list-inside space-y-2'>
          <li> 
            <b>Autenticidad.</b> Nos comprometemos a ofrecer una experiencia culinaria genuina, respetando las tradiciones y técnicas de la cocina japonesa.
          </li>
          <li>
            <b>Calidad. </b> Utilizamos ingredientes frescos y de la más alta calidad, seleccionados cuidadosamente para garantizar la excelencia en cada plato.
          </li>
          <li>
            <b>Innovación.</b> Mientras valoramos la tradición, también buscamos innovar y adaptarnos a las tendencias modernas para sorprender y deleitar a nuestros clientes.
          </li>
          <li>
            <b>Hospitalidad.</b> Brindamos un servicio excepcional, basado en el concepto de "omotenashi" (hospitalidad japonesa), anticipando y superando las expectativas de nuestros clientes.
          </li>
          <li>
            <b>Respeto.</b> Fomentamos un ambiente de respeto mutuo entre empleados, clientes y proveedores, valorando la diversidad y promoviendo la inclusión.
          </li>
          <li>
            <b>Cultura.</b> Celebramos y compartimos la rica herencia cultural de Japón, integrando elementos culturales en nuestras actividades y eventos.
          </li>
          <li>
            <b>Pasión.</b> Nos apasiona la cocina japonesa y nos dedicamos a transmitir esa pasión a través de cada detalle de nuestra oferta gastronómica.
          </li>
        </ul>
    </div>
  )
}

export {AboutContainer}