import CardSmall from '@/app/components/CardSmall'
import { preachings } from '@/app/lib/preachingInfo'

const BottonInfo = () => {
  const first3 = preachings.slice(0, 3)
  return (
    <section className='w-full pb-12 lg:pb-24'>
      <div className='flex flex-col items-center border-2 border-blueI p-7 lg:p-16 rounded-2xl'>
        <header>
          <h2 className='font-noto text-blueI text-2xl lg:text-3xl text-center mb-6 lg:mb-8 font-black'>Podría Interesarle</h2>
        </header>
        <div className='flex flex-row flex-wrap justify-around gap-10'>
          {first3.map((preach) => (
            <CardSmall {...preach} key={preach.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BottonInfo
