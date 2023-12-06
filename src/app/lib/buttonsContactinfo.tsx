import InstagramIcon from '../components/componentSVG/InstagramIcon'
import MailIcon from '../components/componentSVG/MailIcon'
import PhoneIcon from '../components/componentSVG/PhoneIcon'
import WhatsappIcon from '../components/componentSVG/WhatsappIcon'
import { type ButtonContactType } from '../lib/definitions'

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
