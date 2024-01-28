import Link from "next/link"

interface Props {
  rute: string
  name: string
}


const ButtonCard = ({ rute, name }: Props) => {
  return (
    <Link
    className={`flex w-1/2 items-center justify-center py-3 px-2 bg-blueI rounded-md`}
    href={rute}>
      <p className='font font-medium text-center text-xs sm:text-base md:text-lg text-whiteI'>{name}</p>
    </Link>
  )
}
 
export default ButtonCard