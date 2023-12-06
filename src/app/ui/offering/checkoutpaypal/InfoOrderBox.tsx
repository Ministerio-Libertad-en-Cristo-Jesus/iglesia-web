import ArrowLeft from '@/app/components/componentSVG/ArrowLeft'
interface Props {
  descrip: string
  amountMoney: string
  payType: string
}

const InfoOrderBox = ({ descrip, amountMoney, payType }: Props) => {
  return (
    <div className='flex flex-col items-center mt-44 lg:mt-52 lg:mb-40 w-full gap-8 border-2 border-blueI rounded-xl p-8 lg:p-16'>
      <header className='flex w-full items-center gap-4'>
        <ArrowLeft />
        <p className='font-noto text-whiteI bg-blue-600 border border-blue-800 rounded px-2 py-1'>PayPal Checkout</p>
      </header>

      <div className='flex flex-col w-full'>
        <p className=' font-noto font-normal text-gray-500 text-normal'>Pago Total:</p>
        <p className=' font-noto text-blueI font-medium text-4xl'>${amountMoney}.00</p>
      </div>

      <article className='w-full bg-[#dadada] rounded-lg p-4'>
        <div className='flex flex-col w-full gap-3'>
          <div className='flex w-full justify-between'>
            <p className='font-noto text-blueI text-sm font-medium'>{payType}</p>
            <p className='font-noto text-blueI text-sm font-medium'>${amountMoney}.00</p>
          </div>
          <div>
            <p className='font-noto font-normal text-gray-700 text-xs text-normal'><b>{payType}:</b> {descrip}</p>
          </div>
        </div>
      </article>

      <div className='flex flex-col w-full gap-6'>
        <div className='flex w-full justify-between'>
          <p className='font-noto text-blueI font-medium'>Subtotal:</p>
          <p className='font-noto text-blueI font-medium'>${amountMoney}.00</p>
        </div>

        <div className='w-full bg-gray-600 h-[1px]'></div>

        <div className='flex w-full justify-between'>
          <p className='font-noto text-blueI font-medium'>Total:</p>
          <p className='font-noto text-blueI font-medium'>${amountMoney}.00</p>
        </div>
      </div>
    </div>
  )
}

export default InfoOrderBox
