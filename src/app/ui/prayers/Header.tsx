import Image from 'next/image'
import headerImg from '../../../../public/image/prayerHeader.jpg'

const HeaderPrayer = () => {
  return (
    <section className='flex relative justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='w-full absolute px-10 lg:px-24 bottom-10 flex flex-col items-center'>
        <h3 className='font-black text-whiteI mb-2 text-3xl lg:text-5xl text-center'>
          ¡Peticiones de Oración!
        </h3>
        <p className='font-light text-whiteI text-base lg:text-xl text-center'>
          Envianos tu petición y en la brevedad un grupo de intercesores orará por tu peticion.
        </p>
      </div>

      <Image
      width={1440}
      height={700}
      className='w-full h-[600px] object-cover max-w-[1440px]'
      src={headerImg}
      alt="headerImage"
      />

    </section>
  )
}

export default HeaderPrayer
