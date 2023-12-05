import ArrowIcon from '../components/componentSVG/arrow'
import Header from '../ui/contact/Header'
import BoxContact from '../ui/contact/BoxContact'
import ButtonsPages from '../components/ButtonsPages'
import RightInfo from '../ui/layout/RightInfo'

export default function Contact () {
  return (
    <main className='w-full flex flex-col items-center mt-20'>
      <Header />
      <ArrowIcon />
      <div className='w-full flex flex-col items-center px-10 lg:px-24 max-w-[1440px]'>
        <ButtonsPages />
        <section id='contact' className='flex flex-col xl:flex-row w-full gap-0 xl:gap-12'>
          <BoxContact />
          <RightInfo />
        </section>
      </div>
    </main>
  )
}
