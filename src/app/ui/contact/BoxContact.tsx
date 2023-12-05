import Buttons from './Buttons'
import FormContact from './form/FormContact'

const BoxContact = () => {
  return (
    <section className="w-full pb-10 lg:pb-24 max-w-[1440px]">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 border-blueI rounded-2xl">
        <h2 className='text-blueI text-center font-black text-2xl sm:text-4xl'>Vias de contacto</h2>
        <p className='text-blueI text-center font-light mb-7 lg:mb-16 text-lg sm:text-2xl'>¡a un solo click!</p>
        <Buttons />
        <h2 className='text-blueI text-center font-black mt-7 lg:mt-16 text-2xl sm:text-4xl'>Dejanos un mensaje</h2>
        <p className='text-blueI text-center font-light mb-7 lg:mb-16 text-lg sm:text-2xl'>¡Llena todos los campos!</p>
        <FormContact />
      </div>
    </section>
  )
}

export default BoxContact
