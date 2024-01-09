import CardSmall from '../../components/CardSmall'
import { preachings } from '../../lib/preachingInfo'

const RightInfo = () => {
  const first3 = preachings.slice(0, 3)
  return (
    <aside className='flex flex-col justify-end pb-16 lg:pb-0 relative pt-8 lg:pt-0'>
      <div className='flex flex-col sticky bottom-[8rem] items-center border-2 border-blueI p-7 lg:p-16 rounded-2xl'>
        <h2 className=' text-blueI text-2xl lg:text-3xl text-center mb-6 lg:mb-8 font-black'>Podría Interesarle</h2>
        <div className='flex flex-row flex-wrap justify-around xl:flex-col items-center gap-7'>
          {first3.map((preach) => (
            <CardSmall {...preach} key={preach.id} />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RightInfo
