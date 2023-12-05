import { type ButtonSidepanelProps } from '../../../lib/definitions'
import HomeIcon from '../../../components/componentSVG/home'
import BookOpenIcon from '../../../components/componentSVG/book-open'
import HandIcon from '../../../components/componentSVG/hand'
import InfoIcon from '../../../components/componentSVG/info'
import ContactIcon from '../../../components/componentSVG/contact'
import CurrencyIcon from '../../../components/componentSVG/currency'

export const buttonsArray: ButtonSidepanelProps[] = [
  {
    svg: <HomeIcon />,
    rute: '/',
    name: 'Inicio'
  },
  {
    svg: <InfoIcon />,
    rute: '/aboutUs',
    name: 'Sobre nosotros'
  },
  {
    svg: <HandIcon />,
    rute: '/prayers',
    name: 'Oraciones'
  },
  {
    svg: <BookOpenIcon />,
    rute: '/preachings',
    name: 'Enseñanzas'
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
