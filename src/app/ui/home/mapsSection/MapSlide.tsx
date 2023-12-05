import dynamic from 'next/dynamic'
// import Map from './Map'
import { type MapSlideType } from '../../../lib/definitions'
const Map = dynamic(() => import('./Map'), { ssr: false })

const MapSlide = ({ position, popup, link, stateSvg, rigth, isSelected }: MapSlideType) => {
  const rightStyle = `${isSelected ? 'translate-x-0' : 'translate-x-full invisible'}`
  const leftStyle = `${isSelected ? '-translate-x-0' : '-translate-x-full invisible'}`
  return (
    <article className={`flex flex-col w-full ${rigth ? leftStyle : rightStyle} items-center justify-center transition-all duration-300`}>
      <div className='flex w-screen px-10 lg:px-24 gap-24 justify-center'>
        <Map position={position} popup={popup} />
        {stateSvg}
      </div>
      <a
      className='  mt-12 text-whiteI font-medium text-xl hover:text-yellow-500 transition-all duration-200 underline underline-offset-2'
      href={link}
      target="_blank"
      rel="noopener noreferrer">¿Comó llegar?</a>
    </article>
  )
}

export default MapSlide
