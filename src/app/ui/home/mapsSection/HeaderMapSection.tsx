import LogoMin from '../../../components/componentSVG/LogoMin'

const HeaderMapSection = () => {
  return (
    <header className='flex flex-col xl:flex-row items-center mb-12 lg:mb-16'>
      <LogoMin />
      <div className='mt-8 xl:mt-0 xl:ml-12'>
        <h2 className='  text-whiteI font-black text-3xl lg:text-5xl'>Encuentranos</h2>
        <p className='  text-whiteI font-thin text-[1.65rem] lg:text-[2.65rem]'>En nuestras sedes</p>
      </div>
    </header>
  )
}

export default HeaderMapSection
