'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  icon: JSX.Element
  rute: string
  name: string
  onClick?: () => void
}

const Button = ({ rute, name, icon, onClick }: Props) => {
  const pathname = usePathname()
  return (
    <Link
    onClick={onClick}
    className={`flex w-auto md:w-full items-center p-1 md:py-3 md:pl-2 rounded-md ${pathname === rute ? 'bg-whiteI' : ''} hover:bg-whiteI`}
    href={rute}>
      {icon}
      <p className='font-medium hidden md:block text-sm min-[1441px]:text-base sm:text-lg text-blueI ml-3'>{name}</p>
    </Link>
  )
}

export default Button
