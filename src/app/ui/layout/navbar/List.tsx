'useClient'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type listProps } from '../../../lib/definitions'

const List = ({ items, listStyle, itemStyle }: listProps) => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className={listStyle}>
        {
          items.map((item, index) => {
            return (
              <Link
              key={index}
              href={item.rute}
              className={`font-medium text-lg ${pathname === item.rute ? 'text-yellow-500' : 'text-whiteI'} hover:text-yellow-500 transition-all duration-200`}
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
