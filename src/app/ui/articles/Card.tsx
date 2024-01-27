import { usePathname, useRouter } from 'next/navigation'
import { type PreachType } from '../../lib/definitions'
import { dateSeter } from '../../lib/dateSeter'
import Image from 'next/image'

const Card = ({ title, author, content, date, image }: PreachType) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <article
    onClick={() => { router.push(`${pathname.startsWith('/preachings') ? `/preachings/${title}` : `/news/${title}`}`) }}
    className='flex-2 sm:flex-3 min-w-[268px] bg-[#d6d6d6] rounded-t-xl rounded-b-xl hover:shadow-md lg:hover:shadow-xl hover:cursor-pointer transition-all duration-200'>
      <Image
      width={1440}
      height={700}
      className='rounded-t-xl h-36 lg:h-44 object-cover'
      src={image}
      alt={title} />
      <div className='m-2 lg:m-5'>
        <h2 className='font-noto font-bold text-blueI text-base lg:text-lg'>{title}</h2>
        <p className='font noto text-blueI mt-1 font-medium text-sm lg:text-base'>{author}</p>
        <p className='font-noto text-blueI mt-2 font-medium text-sm lg:text-base line-clamp-2'>{content[0]}</p>
        <p className='font-noto text-gray-600 mt-3 text-xs lg:text-sm'>{dateSeter(date)}</p>
      </div>

    </article>
  )
}

export default Card
