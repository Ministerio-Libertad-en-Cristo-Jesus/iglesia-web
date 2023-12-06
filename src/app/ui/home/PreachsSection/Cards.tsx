import { type Preaches } from '../../../lib/definitions'
import Card from './Card'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const Cards = ({ preaches }: Preaches) => {
  return (
    <section className='flex w-screen mb-10 px-10 lg:px-24 max-w-[1440px]'>
      <div className='flex w-screen p-6 lg:p-8 textcal overflow-auto justify-between gap-10 lg:gap-20'>
        {preaches.map((preach) => (
          <Card {...preach} key={preach.id} />
        ))}
      </div>
    </section>
  )
}

export default Cards
