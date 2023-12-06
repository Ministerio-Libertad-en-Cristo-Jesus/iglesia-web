import PayPalMethod from './methods/PayPalMethod'

const BoxOffering = () => {
  return (
    <div className="w-full pb-10 lg:pb-24 max-w-[1440px]">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 gap-8 border-blueI rounded-2xl">
        <h2 className='text-2xl text-center sm:text-4xl text-blueI font-black'>Metodos de pago</h2>
        <PayPalMethod />
      </div>
    </div>
  )
}

export default BoxOffering
