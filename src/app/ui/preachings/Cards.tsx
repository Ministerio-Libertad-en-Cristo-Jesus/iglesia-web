import { type PreachType } from '../../lib/definitions'
import Card from './Card'

interface Props {
  preachings: PreachType[]
}

const Cards = ({ preachings }: Props) => {
  return (
    <section className='flex flex-wrap w-full max-w-[1356px] justify-center gap-10'>
      {
        preachings.map((preach, index) => (
          <Card title={preach.title} key={index} content={preach.content} image={preach.image} id={preach.id} date={preach.date} pastor={preach.pastor} />
        ))
      }
    </section>
  )
}

export default Cards
