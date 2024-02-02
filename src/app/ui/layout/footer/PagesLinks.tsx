'use client'
import { urlPagesInfo } from '../../../lib/pagesInfo'
import Link from 'next/link'

const PagesLinks = () => {
  return (
    <nav>
      <ul className='flex flex-wrap gap-8 items-center justify-center sm:gap-16'>
        {
          urlPagesInfo.map((pageInfo) => (
            <Link
            href={pageInfo.link}
            className="font-medium text-lg text-whiteI hover:text-yellow-500 transition-all duration-200 hover:cursor-pointer"
            key={pageInfo.text}>
              {pageInfo.text}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default PagesLinks
