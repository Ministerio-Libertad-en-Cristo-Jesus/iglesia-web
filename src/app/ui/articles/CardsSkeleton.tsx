import CardSkeleton from './CardSkeleton'

const CardsSkeleton = () => {
  const arrCards = [1, 2, 3, 4, 5, 6]
  return (
    <section className='flex flex-wrap w-full max-w-[1356px] justify-center gap-10'>
      {
        arrCards.map((num, index) => (
          <CardSkeleton key={index} />
        ))
      }
    </section>
  )
}

export default CardsSkeleton
