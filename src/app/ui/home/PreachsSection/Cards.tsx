import { type Preaches } from '../../../lib/definitions'
import Card from './Card'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import CardSkeleton from './CardSkeleton'

const Cards = ({ preaches }: Preaches) => {
  let example = [1, 2, 3]
  return (
    <section className='flex w-screen mb-10 px-10 lg:px-24 max-w-[1440px]'>
      <div className='flex w-screen p-6 lg:p-8 textcal overflow-auto justify-between gap-10 lg:gap-20'>
        {
          preaches[0] === undefined
          ? example.map((preach, index) => (
              <CardSkeleton key={index}/>
            ))
          : preaches.map((preach, index) => (
              <Card key={index} {...preach} />
            ))
        }
      </div>
    </section>
  )
}

export default Cards
