'use client'
import { ArticleNew, PreachType } from '@/app/lib/definitions'
import CardSmall from '../../components/CardSmall'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'
import CardSmallSkeleton from '@/app/components/CardSmallSkeleton'

const RightInfo = () => {
  const [news, setNews] = useState<PreachType[]>([])
  const [charged, setCharged] = useState(true)
  const [message, setMessage] = useState('')
  const first3 = [1, 2, 3]

   useEffect(() => {
    axios.get('/api/articles/articlescarrousel', { withCredentials: true })
      .then((res) => {
        setCharged(true)
        setNews(res.data.map((art: ArticleNew) => {
          return {
            title: art.title,
            content: art.content,
            image: art.image,
            author: art.author,
            id: art.id,
            date: typeDateModelSeter(art.createdAt)
          }
        }))
      })
      .catch((err) => {
        setCharged(true)
        setMessage(err.response.data.message)
        console.log(err)
      })
  }, [])

  return (
    <aside className='flex flex-col justify-end pb-16 lg:pb-0 relative pt-8 lg:pt-0'>
      <div className='flex flex-col sticky bottom-[8rem] items-center border-2 border-blueI p-7 lg:p-16 rounded-2xl'>
        <h2 className=' text-blueI text-2xl lg:text-3xl text-center mb-6 lg:mb-8 font-black'>Podría Interesarle</h2>
        <div className='flex flex-row flex-wrap justify-around xl:flex-col items-center gap-7'>
          {
            charged
            ? message === ''
              ? news.map((preach, index) => (
                  <CardSmall key={index} {...preach} />
                ))
              : <p className='text-red-700 font-semibold text-center'>No hay novedades</p>
            : first3.map((preach, index) => (
                <CardSmallSkeleton key={index} />
              ))
          }
        </div>
      </div>
    </aside>
  )
}

export default RightInfo
