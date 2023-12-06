// Importación de componentes y estilos de Swiper
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Importación de datos de predicaciones
import { preachings } from '../../../lib/preachingInfo'

// Importación de estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Importación del componente Slide
import Slide from './Slide'

const Carrousel = () => {
  // Obtiene un conjunto limitado de datos de predicaciones (solo los primeros 3)
  const preachs = preachings.slice(0, 3)
  return (
    <section id='carrouselPreach' className='flex w-screen flex-col justify-center'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0} // Espacio entre las diapositivas
        slidesPerView={1} // Número de diapositivas visibles al mismo tiempo
        navigation
        className='flex w-[100%] max-w-[1440px] header-carrousel'
        pagination={{ clickable: true }} // Configuración de paginación (se puede hacer clic en los puntos)
        >
        {
          // Itera sobre los datos de predicaciones y muestra cada una de ellas en un Slide
          preachs.map(preaching => (
            <SwiperSlide key={preaching.id}>
              <Slide title={preaching.title} content={preaching.content} image={preaching.image} pastor={preaching.pastor} date={preaching.date} id={preaching.id} />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </section>
  )
}

export default Carrousel
