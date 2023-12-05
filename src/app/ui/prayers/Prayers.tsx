import ArrowIcon from '../../components/componentSVG/arrow'
import RightInfo from '../../ui/layout/RightInfo'
import BoxPrayer from './BoxPrayer'
import HeaderPrayer from './Header'
import ButtonsPages from '../../components/ButtonsPages'

const Prayers = () => {
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

export default Prayers
