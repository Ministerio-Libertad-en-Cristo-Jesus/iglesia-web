import InstagramIcon from '../assets/componentSVG/InstagramIcon'
import MailIcon from '../assets/componentSVG/MailIcon'
import PhoneIcon from '../assets/componentSVG/PhoneIcon'
import WhatsappIcon from '../assets/componentSVG/WhatsappIcon'
import { type ButtonContactType } from '../types/types'

export const buttonsContactInfo: ButtonContactType[] = [
  {
    text: 'Mensaje directo Instagram',
    icon: <InstagramIcon />,
    green: false,
    url: 'https://ig.me/m/ministerioilcj'
  },
  {
    text: 'Mensaje Directo WhatsApp',
    icon: <WhatsappIcon />,
    green: true,
    url: 'https://wa.me/+14752438331'
  },
  {
    text: 'Línea telefónica directa',
    icon: <PhoneIcon />,
    green: false,
    url: 'tel:+14752438331'
  },
  {
    text: 'Dirección de Email',
    icon: <MailIcon />,
    green: false,
    url: 'mailto: libertadencristojesus@gmail.com'
  }
]
