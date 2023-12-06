import ButtonContact from '../../components/ButtonContact'
import { buttonsContactInfo } from '../../lib/buttonsContactinfo'

const Buttons = () => {
  return (
    <nav className="flex flex-col items-center gap-5 sm:gap-8 w-full">
      {
        buttonsContactInfo.map((button, index) => (
          <ButtonContact
          key={index}
          text={button.text}
          icon={button.icon}
          url={button.url}
          green={button.green}
          />
        ))
      }
    </nav>
  )
}

export default Buttons
