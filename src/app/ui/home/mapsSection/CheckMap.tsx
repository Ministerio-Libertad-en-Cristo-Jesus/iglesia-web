import MarkerIcon from '../../../components/componentSVG/MarkerIcon'
import { type CheckMapType } from '../../../lib/definitions'

const CheckMap = ({ isSelected, changeMap, title, direction, name, name2, whatSelected }: CheckMapType) => {
  const handleClick = () => {
    if (isSelected) {
      // eslint-disable-next-line no-useless-return
      return
    } else {
      changeMap({
        ...whatSelected,
        [name2]: false,
        [name]: true
      }
      )
    }
  }

  return (
    <button onClick={handleClick} className={`flex items-center max-w-[140px] lg:max-w-[200px] flex-col border-2 ${isSelected ? 'border-whiteI' : 'border-blueI'} hover:cursor-pointer rounded-lg p-1 lg:p-3 transition-all duration-300`}>
      <MarkerIcon />
      <h3 className='text-center font-bold lg:text-lg text-whiteI'>{title}</h3>
      <p id='parrafoMap' className='  text-center text-sm lg:text-base font-light text-whiteI'>{direction}</p>
    </button>
  )
}

export default CheckMap
