import CardSmall from '@/app/components/CardSmall'
import CardSmallSkeleton from '@/app/components/CardSmallSkeleton'
import { ArticleNew, PreachType } from '@/app/lib/definitions'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BottonInfo = () => {
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
      })
  }, [])

  return (
    <section className='w-full pb-12 lg:pb-24'>
      <div className='flex flex-col items-center border-2 border-blueI p-7 lg:p-16 rounded-2xl'>
        <header>
          <h2 className='font-noto text-blueI text-2xl lg:text-3xl text-center mb-6 lg:mb-8 font-black'>Podría Interesarle</h2>
        </header>
        <div className='flex flex-row flex-wrap justify-around gap-10'>
          {
            charged
            ? message === ''
              ? news.map((preach, index) => (
                  <CardSmall key={index} {...preach} />
                ))
              : <p className='text-red-700 font-semibold text-center'>{message}</p>
            : first3.map((preach, index) => (
                <CardSmallSkeleton key={index} />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default BottonInfo
