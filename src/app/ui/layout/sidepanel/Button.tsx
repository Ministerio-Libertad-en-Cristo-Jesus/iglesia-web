import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Dispatch, type SetStateAction } from 'react'
import { type ButtonSidepanelProps } from '../../../lib/definitions'

interface Props extends ButtonSidepanelProps {
  setOpenSidePanel: Dispatch<SetStateAction<boolean>>
  openSidePanel: boolean
}

const Button = ({ svg, rute, name, setOpenSidePanel, openSidePanel }: Props) => {
  const pathname = usePathname()
  return (
    <Link
    onClick={() => {
      openSidePanel ? setOpenSidePanel(false) : setOpenSidePanel(true)
    }}
    className={`flex items-center py-4 pl-2 mx-5 rounded-md ${pathname === rute ? 'bg-gray-300' : ''} hover:bg-gray-300`}
    href={rute}>
      {svg}
      <p className='text-base sm:text-lg text-blueI ml-3'>{name}</p>
    </Link>
  )
}

export default Button
