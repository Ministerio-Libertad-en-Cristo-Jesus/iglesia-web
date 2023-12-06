import ArrowIcon from '@/app/components/componentSVG/arrow'
import RightInfo from '@/app/ui/layout/RightInfo'
import ButtonsPages from '@/app/components/ButtonsPages'
import BoxOffering from '@/app/ui/offering/BoxOffering'
import HeaderOffering from '@/app/ui/offering/HeaderOffering'

export default function Offering () {
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