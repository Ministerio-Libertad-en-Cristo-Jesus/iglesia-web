'use client'
import PrincipalPreach from './PrincipalPreach'
import { preachings } from '../../../lib/preachingInfo'
import Cards from './Cards'
import Button from '../../../components/Button'
import { useRouter } from 'next/navigation'
import ArrowIcon from '../../../components/componentSVG/arrow'
import { useEffect, useState } from 'react'
import { ArticleNew, PreachType } from '@/app/lib/definitions'
import axios from 'axios'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'
import PrincipalPreachSkeleton from './PrincipalPreachSkeleton'

const PreachSection = () => {
  const router = useRouter()
  
  const [articles, setArticles] = useState<PreachType[]>([])
  const firstPreach = articles[0]
  const restPreachings = articles.slice(1, 4)
  const [preachInHome, setPreachInHome] = useState(3)

  useEffect(() => {
    axios.get(`/api/articles/articlespreach?limit=${preachInHome}`, { withCredentials: true })
      .then((res) => {
        setArticles(res.data.map((art: ArticleNew) => {
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
      .catch(err => {
        console.log(err)
      })
  }, [preachInHome])

  return (
    <section id='preachSection' className="flex flex-col flex-wrap mb-12 lg:mb-24 items-center max-w-[1440px]">
      <ArrowIcon />
      <h3 className='mt-12 font-black text-blueI text-4xl'>ENSEÑANZAS</h3>
      <p className='font-normal text-blueI text-lg mt-1'>Nuestras últimas enseñanzas</p>
      {
        articles[0] !== undefined
        ? <PrincipalPreach {...firstPreach} />
        : <PrincipalPreachSkeleton />
      }
      <Cards preaches={restPreachings} />
      <Button text='Ver más Prédicas' dark={false} onClick={() => { router.push('/preachings') }} />
    </section>
  )
}

export default PreachSection
