import { type PreachType } from '../../lib/definitions'
import Card from './Card'
import CardSkeleton from './CardSkeleton'

interface Props {
  preachings: PreachType[]
}

const Cards = ({ preachings }: Props) => {
  const arrCards = [1, 2, 3, 4, 5, 6]
  return (
    <section className='flex flex-wrap w-full max-w-[1356px] justify-center gap-10'>
      {
        preachings[0] === undefined
        ? arrCards.map((num, index) => (
            <CardSkeleton key={index} />
          ))
        : preachings.map((preach, index) => (
            <Card title={preach.title} key={index} content={preach.content} image={preach.image} id={preach.id} date={preach.date} author={preach.author} />
          ))
      }
    </section>
  )
}

export default Cards
