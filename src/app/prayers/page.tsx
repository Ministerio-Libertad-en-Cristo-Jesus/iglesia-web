import ArrowIcon from '../components/componentSVG/arrow'
import RightInfo from '../ui/layout/RightInfo'
import BoxPrayer from '../ui/prayers/BoxPrayer'
import HeaderPrayer from '../ui/prayers/Header'
import ButtonsPages from '../components/ButtonsPages'

export default function Prayers () {
  return (
    <main className='w-full flex flex-col items-center mt-20'>
      <HeaderPrayer />
      <ArrowIcon />
      <div className='w-full flex flex-col items-center px-10 lg:px-24 max-w-[1440px]'>
        <ButtonsPages />
        <div className='flex flex-col xl:flex-row w-full gap-0 xl:gap-12'>
          <BoxPrayer />
          <RightInfo />
        </div>
      </div>
    </main>
  )
}