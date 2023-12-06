'use client'
import { useRouter } from 'next/navigation'
import { type PreachType } from '../lib/definitions'
import { dateSeter } from '../lib/dateSeter'
import Image from 'next/image'

const CardSmall = ({ title, pastor, content, date, image, id }: PreachType) => {
  const router = useRouter()
  return (
    <article
    onClick={() => { router.push(`/preachings/1/${id}`) }}
    className='w-60 min-w-[15rem] bg-[#d6d6d6] rounded-t-xl rounded-b-xl hover:shadow-md hover:cursor-pointer transition-all duration-200'>
      <Image
      width={1440}
      height={700}
      className=' w-60 min-w-[15rem] rounded-t-xl h-36 object-cover'
      src={image}
      alt={title} />
      <div className='m-4'>
        <h2 className='  font-bold text-blueI text-base '>{title}</h2>
        <p className='font noto text-blueI mt-1 font-medium text-xs '>{pastor}</p>
        <p className='  text-blueI mt-2 font-medium text-xs line-clamp-2'>{content[0]}</p>
        <p className='  text-gray-600 mt-3 text-xs'>{dateSeter(date)}</p>
      </div>

    </article>
  )
}

export default CardSmall
