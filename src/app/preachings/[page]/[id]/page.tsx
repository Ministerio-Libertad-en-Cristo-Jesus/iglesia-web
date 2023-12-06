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

export default function Preach () {
  const params = useParams()
  const PreachParamId = params.id
  const preachId = typeof PreachParamId !== 'object' ? isNaN(parseInt(PreachParamId)) ? 0 : parseInt(PreachParamId) : 0
  const preachFind = preachings.find(preach => preach.id === preachId)
  let preachInfo1: PreachType
  preachFind !== undefined ? preachInfo1 = preachFind : preachInfo1 = preachings[0]
  return (
    <main className="flex flex-col items-center w-full mt-20">
      {
        preachFind === undefined
          ? <PreachNoExist />
          : <div className='flex flex-col w-full items-center px-10 lg:px-52 max-w-[1440px]'>
              <HeaderPreach headerImg={preachInfo1.image} />
              <ArrowIcon />
              <ContentPreach preachInfo1={preachInfo1} />
              <ButtonsPages />
              <BottonInfo />
            </div>
      }
    </main>
  )
}
