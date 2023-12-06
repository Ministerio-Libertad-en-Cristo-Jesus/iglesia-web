'use client'
import Image from 'next/image'
import { type CardImageType } from '../../../lib/definitions'
import { useRouter } from 'next/navigation'

const CardImage = ({ title, row, image, link }: CardImageType) => {
  const router = useRouter()

  return (
    <article onClick={() => { router.push(link) }} className={`relative ${row} hover:cursor-pointer rounded-3xl hover:shadow-xl hover:translate-y-[-0.50rem] transition-all duration-300`}>
      <div className='w-full h-full absolute top-0 right-0 max-w-[1440px] rounded-3xl bg-gradient-to-t from-black'></div>

      <div className='absolute w-full bottom-2 sm:bottom-4 lg:bottom-8'>
        <h2 className='text-center font-black text-whiteI text-2xl lg:text-4xl'>{title}</h2>
      </div>

      <Image
      width={1280}
      height={800}
      className='h-full w-full rounded-3xl object-cover'
      src={image}
      alt='contact' />

    </article>
  )
}

export default CardImage
