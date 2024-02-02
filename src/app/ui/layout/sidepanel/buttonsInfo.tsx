import { type ButtonSidepanelProps } from '../../../lib/definitions'
import HomeIcon from '../../../components/componentSVG/home'
import BookOpenIcon from '../../../components/componentSVG/book-open'
import HandIcon from '../../../components/componentSVG/hand'
import InfoIcon from '../../../components/componentSVG/info'
import ContactIcon from '../../../components/componentSVG/contact'
import CurrencyIcon from '../../../components/componentSVG/currency'
import NewsIcon from '@/app/components/componentSVG/NewsIcon'
import DevotionalsIcon from '@/app/components/componentSVG/DevotionalsIcon'

export const buttonsArray: ButtonSidepanelProps[] = [
  {
    svg: <HomeIcon />,
    rute: '/',
    name: 'Inicio'
  },
  {
    svg: <InfoIcon />,
    rute: '/aboutus',
    name: 'Sobre nosotros'
  },
  {
    svg: <HandIcon />,
    rute: '/prayers',
    name: 'Oraciones'
  },
  {
    svg: <DevotionalsIcon />,
    rute: '/devotionals',
    name: 'Devocionales'
  },
  {
    svg: <BookOpenIcon />,
    rute: '/preachings',
    name: 'Enseñanzas'
  },
  {
    svg: <NewsIcon />,
    rute: '/news',
    name: 'Noticias'
  },
  {
    svg: <CurrencyIcon />,
    rute: '/offering',
    name: 'Ofrendas'
  },
  {
    svg: <ContactIcon />,
    rute: '/contact',
    name: 'Contacto'
  }
]
