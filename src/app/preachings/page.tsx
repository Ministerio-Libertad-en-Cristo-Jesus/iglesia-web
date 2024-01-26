'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/app/ui/preachings/Cards'
import Pagination from '@/app/ui/preachings/Pagination'
import axios from 'axios'
import { ArticleNew, PreachType } from '@/app/lib/definitions'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'

export default function Preachings () {
  const [articles, setArticles] = useState<PreachType[]>([])
  const [count, setCount] = useState(0)
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || '1'
  
  useEffect(() => {
    axios.get(`/api/articles/extractpreachings?page=${page}`)
      .then(res => {
        setArticles(res.data.articles.map((art: ArticleNew) => {
          return {
            title: art.title,
            content: art.content,
            image: art.image,
            author: art.author,
            id: art.id,
            date: typeDateModelSeter(art.createdAt)
          }
        }))
        setCount(parseInt(res.data.count))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [page])

  return (
    <main className="flex flex-col w-full items-center justify-center px-10 lg:px-24 mt-32 lg:mt-40">
      <div className='flex flex-col w-full items-center justify-center max-w-[1440px]'>
        <header>
          <h1 className='font-black text-center text-blueI text-3xl lg:text-5xl mt-8'>Enseñanzas</h1>
          <p className='font-normal text-blueI text-center mb-16 text-xl mt-1'>Nuestras últimas enseñanzas</p>
        </header>
        <Cards preachings={articles} />
        <Pagination count={count} />
      </div>
    </main>
  )
}
