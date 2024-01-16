import Link from "next/link"

interface Props {
  rute: string
  name: string
}


const ButtonCard = ({ rute, name }: Props) => {
  return (
    <Link
    className={`flex h-full w-1/2 items-center justify-center py-3 px-2 bg-blueI rounded-md`}
    href={rute}>
      <p className='font font-medium text-center text-base sm:text-lg text-whiteI ml-3'>{name}</p>
    </Link>
  )
}
 
export default ButtonCard