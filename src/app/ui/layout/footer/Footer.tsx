import ButtonLogin from './ButtonLogin'
import PagesLinks from './PagesLinks'
import SociaMedia from './SocialMedia'

const Footer = () => {
  const textStyle = 'text-whiteI font-light text-center'
  return (
    <footer className="flex flex-col z-40 items-center w-full bg-blueI py-16 px-10 lg:px-24 mt-32 sm:mt-36">
      <PagesLinks />
      <div className='flex flex-col items-center my-16'>
        <p className={textStyle}>Ministerio Internacional Libertad en Cristo Jesus</p>
        <p className={textStyle}>8810 Commodity Cir #26, Orlando, FL 32819</p>
      </div>
      <SociaMedia />
      <ButtonLogin />
      <div className='w-full h-[2px] my-16 bg-whiteI'></div>
      <div className='flex flex-col items-center'>
        <p className={textStyle}>Copyright © 2023 Ministerio Internacional Libertad en Cristo Jesus. Derechos Reservados</p>
        <p className={textStyle}>Developed in Venezuela | By kikeai</p>
      </div>
    </footer>
  )
}

export default Footer
