import { useNavigate } from 'react-router-dom'
import { type ButtonContactType } from '../types/types'

const ButtonPage = ({ text, url, icon, green }: ButtonContactType) => {
  const navigate = useNavigate()
  return (
    <button
    onClick={() => { navigate(url) }}
    className={`flex justify-center items-center gap-3 w-full py-3 px-4 ${green ? 'bg-whatsapp' : 'bg-whiteI'}   text-sm lg:text-base font-medium border-2 border-blueI text-blueI hover:bg-blueI hover:text-whiteI transition-all duration-200 rounded-lg`}>
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default ButtonPage
