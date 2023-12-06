'use client'
import { useRouter } from 'next/navigation'
import Button from '../../../components/Button'
import { type PreachType } from '../../../lib/definitions'
import { dateSeter } from '../../../lib/dateSeter'
import Image from 'next/image'

const PrincipalPreach = ({ title, pastor, date, content, image, id }: PreachType) => {
  const router = useRouter()
  return (
    <article className='flex flex-wrap p-10 lg:p-24 lg:flex-nowrap items-center  max-w-[1440px]'>

      <Image
      className='lg:w-[420px] h-[370px] lg:h-[420px] mr-12 object-cover rounded-xl'
      width={1440}
      height={700}
      src={image}
      alt={title} />

      <div className='flex flex-col mt-8 lg:mt-0 items-center'>

        <div>
          <h2 className='font-black text-blueI text-2xl lg:text-4xl'>{title}</h2>
          <p className='font-bold mt-2 lg:mt-4 text-blueI text-lg lg:text-xl'>{`Pastor ${pastor}`}</p>
          <p className='font-medium mt-1 text-gray-800 text-xs lg:text-sm'>{dateSeter(date)}</p>
          <p className='font-normal mb-8 line-clamp-4 text-blueI text-xs lg:text-lg max-w-[850px] mt-3 mr-10 lg:mr-0 lg:mt-5'>{content[0]}</p>
        </div>

        <Button text='Leer Prédica' dark={false} onClick={() => { router.push(`/preachings/${id}`) }} />

      </div>

    </article>
  )
}

export default PrincipalPreach
