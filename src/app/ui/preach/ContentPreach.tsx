import { type PreachType } from '@/app/lib/definitions'
import { dateSeter } from '@/app/lib/dateSeter'
import { lectureTimeCalculator } from '@/app/lib/lectureTime'
interface Props {
  preachInfo1: PreachType
}

const ContentPreach = ({ preachInfo1 }: Props) => {
  const lectureTime = lectureTimeCalculator(preachInfo1.content, 200)
  return (
    <section className='flex flex-col items-center pt-10 lg:pt-24 max-w-[1440px]'>
      <header>
        <h1 className='font-noto font-black text-blueI text-3xl sm:text-4xl text-center'>{preachInfo1.title}</h1>
        <p className='font-noto text-blueI text-center text-lg sm:text-xl mt-4'>{dateSeter(preachInfo1.date)}</p>
        <p className='font-noto text-gray-700 text-base sm:text-lg mt-4 m-10 text-center sm:mb-16'>{`Tiempo de lectura estimado: ${lectureTime} minutos`}</p>
      </header>
      <div className='flex flex-col items-center w-full gap-8'>
        {
          preachInfo1.content.map((paragraph, index) => (
            <p key={index} className='font-noto font-normal text-blueI text-lg'>{paragraph}</p>
          ))
        }
      </div>
    </section>
  )
}

export default ContentPreach
