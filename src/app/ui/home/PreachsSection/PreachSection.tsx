'use client'
import PrincipalPreach from './PrincipalPreach'
import { preachings } from '../../../lib/preachingInfo'
import Cards from './Cards'
import Button from '../../../components/Button'
import { useRouter } from 'next/navigation'
import ArrowIcon from '../../../components/componentSVG/arrow'

const PreachSection = () => {
  const router = useRouter()
  const firstPreach = preachings[0]
  const restPreachings = preachings.slice(1, 4)
  return (
    <section id='preachSection' className="flex flex-col flex-wrap mb-12 lg:mb-24 items-center max-w-[1440px]">
      <ArrowIcon />
      <h3 className='mt-12 font-black text-blueI text-4xl'>ENSEÑANZAS</h3>
      <p className='font-normal text-blueI text-lg mt-1'>Nuestras últimas enseñanzas</p>
      <PrincipalPreach {...firstPreach} />
      <Cards preaches={restPreachings} />
      <Button text='Ver más Prédicas' dark={false} onClick={() => { router.push('/preachings') }} />
    </section>
  )
}

export default PreachSection
