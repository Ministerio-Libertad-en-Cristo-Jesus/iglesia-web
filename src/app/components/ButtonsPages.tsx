import BookOpenWhiteIcon from '../components/componentSVG/bookOpenWhite'
import HandWhiteIcon from '../components/componentSVG/handWhite'
import ButtonPage from './ButtonPage'

const ButtonsPages = () => {
  return (
    <section id='buttonsPage' className="flex flex-col sm:flex-row w-full py-8 lg:py-16 gap-8">
      <ButtonPage text='Peticion de Oración' green={false} url='/prayers' icon={<HandWhiteIcon />} />
      <ButtonPage text='Enseñanzas' green={false} url='/preachings' icon={<BookOpenWhiteIcon />} />
    </section>
  )
}

export default ButtonsPages
