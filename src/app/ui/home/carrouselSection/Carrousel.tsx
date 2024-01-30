// Importación de componentes y estilos de Swiper
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

// Importación de datos de predicaciones
import { preachings } from '../../../lib/preachingInfo'

// Importación de estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Importación del componente Slide
import Slide from './Slide'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ArticleNew, PreachType } from '@/app/lib/definitions'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'
import SkeletonSlide from './SkeletonSlide'

const Carrousel = () => {
  // Obtiene un conjunto limitado de datos de predicaciones (solo los primeros 3)
  const [articles, setArticles] = useState<PreachType[]>([])

  useEffect(() => {
    axios.get('/api/articles/articlescarrousel', { withCredentials: true })
      .then((res) => {
        setArticles(res.data.map((art: ArticleNew) => {
          return {
            title: art.title,
            content: art.content,
            image: art.image,
            author: art.author,
            id: art.id,
            date: typeDateModelSeter(art.createdAt)
          }
        }))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section id='carrouselPreach' className='flex w-screen items-center flex-col justify-center'>
      {
        articles[0] !== undefined
        ? <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          }}
          loop={true} // Permite que el carrousel se repita infinitamente
          spaceBetween={0} // Espacio entre las diapositivas
          slidesPerView={1} // Número de diapositivas visibles al mismo tiempo
          navigation={true} // Configuración de navegación (botones de avanzar y retroceder)
          className='flex w-[100%] max-w-[1440px] header-carrousel'
          pagination={{ clickable: true }} // Configuración de paginación (se puede hacer clic en los puntos)
          >
          {
            // Itera sobre los datos de predicaciones y muestra cada una de ellas en un Slide
            articles.map(article => (
              <SwiperSlide key={article.id}>
                <Slide title={article.title} content={article.content} image={article.image} author={article.author} date={article.date} id={article.id} />
              </SwiperSlide>
            ))
          }

        </Swiper>
        : <SkeletonSlide />
      }
    </section>
  )
}

export default Carrousel
