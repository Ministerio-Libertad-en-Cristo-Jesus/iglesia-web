import { type ButtonContactType } from '../types/types'

const ButtonContact = ({ text, url, icon, green }: ButtonContactType) => {
  return (
    <button
    onClick={() => { window.open(url) }}
    className={`flex justify-center items-center gap-3 w-full py-3 px-4 ${green ? 'bg-whatsapp' : 'bg-blueI'}   text-sm lg:text-base font-medium text-whiteI rounded-lg`}>
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default ButtonContact
