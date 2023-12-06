'use client'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SocialSlide from './SocialSlide'
import { socialMedia } from '../../../lib/socialInfo'

const SocialMediaCarrousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      className='flex px-10 lg:px-24 w-[100%] max-w-[1440px] social-media'
      pagination={{ clickable: true }}>

      {socialMedia.map(socialMedia => (
        <SwiperSlide key={socialMedia.name}>
          <SocialSlide
            name={socialMedia.name}
            logo={socialMedia.logo}
            link={socialMedia.link}
            description={socialMedia.description}
            buttonText={socialMedia.buttonText}
          />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default SocialMediaCarrousel
