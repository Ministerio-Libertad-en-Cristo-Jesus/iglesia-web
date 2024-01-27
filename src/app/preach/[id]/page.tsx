'use client'
import { preachings } from '@/app/lib/preachingInfo'
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

export default function Preach () {
  const [preach, setPreach] = useState<PreachType[]>([])
  const params = useParams()
  const PreachParamTitle = params.title
  const preachTitle = typeof PreachParamTitle !== 'object' ? PreachParamTitle : ""

  useEffect(() => {
    axios.get(`/api/articles/extractpreach?title=${preachTitle}`, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        setPreach([res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [preachTitle])

  return (
    <main className="flex flex-col items-center w-full mt-20">
      {
        preach[0] === undefined
          ? <PreachNoExist />
          : <div className='flex flex-col w-full items-center px-10 lg:px-52 max-w-[1440px]'>
              <HeaderPreach headerImg={preach[0].image} />
              <ArrowIcon />
              <ContentPreach preachInfo1={preach[0]} />
              <ButtonsPages />
              <BottonInfo />
            </div>
      }
    </main>
  )
}
