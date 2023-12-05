import { type CardImageType } from '../lib/definitions'
import contactImg from '../../../public/image/contact.jpg'
import aboutUsImg from '../../../public/image/aboutUs.jpg'
import prayersImg from '../../../public/image/prayers.jpg'

export const pagesInfo: CardImageType[] = [
  {
    row: 'sm:row-span-2',
    title: 'Petición de Oración',
    image: prayersImg.src,
    link: '/prayers'
  },
  {
    row: '',
    title: 'Sobre Nosotros',
    image: aboutUsImg.src,
    link: '/aboutus'
  },
  {
    row: '',
    title: 'Contactanos',
    image: contactImg.src,
    link: '/contact'
  }
]

export const urlPagesInfo = [
  {
    text: 'Inicio',
    link: '/'
  },
  {
    text: 'Sobre Nosotros',
    link: '/aboutus'
  },
  {
    text: 'Oraciones',
    link: '/prayers'
  },
  {
    text: 'Enseñanzas',
    link: '/preachings'
  },
  {
    text: 'Ofrendas',
    link: '/offering'
  },
  {
    text: 'Contacto',
    link: '/contact'
  }
]
