import FormPrayer from './form/FormPrayer'

const BoxPrayer = () => {
  return (
    <section className="w-full pb-10 xl:pb-0 max-w-[1440px]">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 border-blueI rounded-2xl">
        <header>
          <h2 className='text-blueI text-center font-black text-2xl sm:text-4xl mb-3'>Peticiones de oración</h2>
          <p className='text-blueI font-light mb-2 text-base sm:text-lg text-center'>Estamos interesados en ti y en tus necesidades, y creemos que Dios responderá toda petición que hagamos de común acuerdo. Envía tu petición y junto a un equipo de intercesión estaremos orando por ella.</p>
          <p className='text-blueI font-medium text-base sm:text-lg mb-12 text-center'>Para enviar tu petición, rellena el siguiente formulario:</p>
        </header>
        <FormPrayer />
      </div>
    </section>
  )
}

export default BoxPrayer
