import PaypalButtonsCont from '../paypal/PaypalButtons'
interface Props {
  descrip: string
  amountMoney: string
}

const ProcedPayBox = ({ descrip, amountMoney }: Props) => {
  return (
    <div className="flex flex-col items-center p-8 lg:p-16 border-2 lg:mt-52 mb-20 lg:mb-40 w-full border-blueI rounded-xl">
      <div className='flex w-full gap-2 items-center'>
        <div className='w-full bg-gray-600 h-[1px]'></div>
          <p className="font-noto text-sm my-6 text-center text-gray-600 font-medium whitespace-nowrap">Realizar Pago</p>
        <div className='w-full bg-gray-600 h-[1px]'></div>
       </div>
      <PaypalButtonsCont descrip={descrip} amountMoney={amountMoney} />
    </div>
  )
}

export default ProcedPayBox
