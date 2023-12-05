import { socialMediaIcon } from '../../../lib/socialInfo'

const SociaMedia = () => {
  return (
    <ul className='flex gap-10 sm:gap-12'>
      {
        socialMediaIcon.map(item => (
          <li
          className='hover:cursor-pointer'
          onClick={() => { window.open(item.link) }}
          key={item.name}>
            {item.icon}
          </li>
        ))
      }
    </ul>
  )
}

export default SociaMedia
