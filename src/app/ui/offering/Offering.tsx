import ArrowIcon from '@/app/components/componentSVG/arrow'
import RightInfo from '@/app/ui/layout/RightInfo'
import ButtonsPages from '../../components/ButtonsPages'
import BoxOffering from './BoxOffering'
import HeaderOffering from './HeaderOffering'

const Offering = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <HeaderOffering />
      <ArrowIcon />
      <div className='w-full flex flex-col items-center px-10 lg:px-24 max-w-[1440px]'>
        <ButtonsPages />
        <div className='flex flex-col xl:flex-row w-full gap-0 xl:gap-12'>
          <BoxOffering />
          <RightInfo />
        </div>
      </div>
    </div>
  )
}

export default Offering
