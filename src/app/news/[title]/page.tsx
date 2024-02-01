'use client'
import { useParams } from 'next/navigation'
import { type PreachType } from '@/app/lib/definitions'
import HeaderPreach from '@/app/ui/preach/HeaderPreach'
import ArrowIcon from '@/app/components/componentSVG/arrow'
import ContentPreach from '@/app/ui/preach/ContentPreach'
import ButtonsPages from '@/app/components/ButtonsPages'
import BottonInfo from '@/app/ui/preach/BottonInfo'
import PreachNoExist from '@/app/ui/preach/PreachNoExist'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { typeDateModelSeter } from '@/app/lib/typeDateModelSeter'
import Loading from '@/app/components/Loading'
import HeaderPreachSkeleton from '@/app/ui/preach/HeaderPreachSkeleton'

export default function News () {
  const [preach, setPreach] = useState<PreachType[]>([])
  const [charged, setCharged] = useState(false)
  const [message, setMessage] = useState('')
  const params = useParams()
  const PreachParamTitle = params.title
  const preachTitle = typeof PreachParamTitle !== 'object' ? PreachParamTitle : ""

  useEffect(() => {
    axios.get(`/api/articles/extractnew?title=${preachTitle}`, { withCredentials: true })
      .then(res => {
        setCharged(true)
        setPreach([{
          title: res.data.title,
          content: res.data.content,
          image: res.data.image,
          author: res.data.author,
          id: res.data.id,
          date: typeDateModelSeter(res.data.createdAt)
        }])
      })
      .catch(err => {
        setCharged(true)
        setMessage(err.response.data.message)
      })
  }, [preachTitle])

  return (
    <main className="flex flex-col items-center w-full mt-20">
      {
        charged
          ? preach[0] !== undefined
            ? <div className='flex flex-col w-full items-center px-10 lg:px-52 max-w-[1440px]'>
                <HeaderPreach headerImg={preach[0]?.image} />
                <ArrowIcon />
                <ContentPreach preachInfo1={preach[0]} />
                <ButtonsPages />
                <BottonInfo />
              </div>
            : <PreachNoExist />
          : <div className='flex flex-col w-full items-center px-10 lg:px-52 max-w-[1440px]'>
              <HeaderPreachSkeleton />
              <div className='w-full h-12'></div>
              <Loading />
            </div>
      }
    </main>
  )
}
