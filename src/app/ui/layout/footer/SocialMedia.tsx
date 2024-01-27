import Link from 'next/link'
import { socialMediaIcon } from '../../../lib/socialInfo'

const SociaMedia = () => {
  return (
    <ul className='flex gap-10 sm:gap-12'>
      {
        socialMediaIcon.map(item => (
          <Link
          className='hover:cursor-pointer'
          href={item.link}
          key={item.name}>
            {item.icon}
          </Link>
        ))
      }
    </ul>
  )
}

export default SociaMedia
