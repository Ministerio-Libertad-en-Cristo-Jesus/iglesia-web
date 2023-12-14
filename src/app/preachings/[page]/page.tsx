'use client'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Cards from '../../ui/preachings/Cards'
import Pagination from '../../ui/preachings/Pagination'
import { preachings2 } from '../../lib/preachingInfo'

export default function Preachings () {
  const router = useRouter()
  const params = useParams()
  const paramPage = params.page
  const cardXPage = 6
  const maxPage = Math.ceil(preachings2.length / cardXPage)
  useEffect(() => {
    if(typeof paramPage !== 'object' && parseInt(paramPage) > maxPage) {
      router.push(`/preachings/${maxPage}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const page = paramPage === undefined || paramPage === '0' || typeof paramPage === 'object' ? 1 : parseInt(paramPage)
  const preachings = preachings2.slice((page - 1) * cardXPage, page * cardXPage)
  return (
    <main className="flex flex-col w-full items-center justify-center px-10 lg:px-24 mt-32 lg:mt-40 mb-10 lg:mb-24">
      <div className='flex flex-col w-full items-center justify-center max-w-[1440px]'>
        <header>
          <h1 className='font-black text-center text-blueI text-3xl lg:text-5xl mt-8'>Enseñanzas</h1>
          <p className='font-normal text-blueI text-center mb-16 text-xl mt-1'>Nuestras últimas enseñanzas</p>
        </header>
        <Cards preachings={preachings} />
        <Pagination page={page} maxPage={maxPage} />
      </div>
    </main>
  )
}
