'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type listProps } from '../../../lib/definitions'

const List = ({ items, listStyle }: listProps) => {
  const pathname = usePathname()
  return (
    <nav className='flex'>
      <ul className={listStyle}>
        {
          items.map((item, index) => {
            return (
              <Link
              key={index}
              href={item.rute}
              className={`font-medium text ${pathname === item.rute ? 'text-yellow-500' : 'text-whiteI'} hover:text-yellow-500 transition-all duration-200`}
              >
                {item.name}
              </Link>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default List
