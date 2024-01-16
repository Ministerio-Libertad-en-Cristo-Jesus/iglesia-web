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
    className={`flex items-center py-3 pl-2 mx-5 rounded-md ${pathname === rute ? 'bg-grayII' : ''} hover:bg-grayII`}
    href={rute}>
      {icon}
      <p className='font font-medium text-base sm:text-lg text-blueI ml-3'>{name}</p>
    </Link>
  )
}

export default Button
