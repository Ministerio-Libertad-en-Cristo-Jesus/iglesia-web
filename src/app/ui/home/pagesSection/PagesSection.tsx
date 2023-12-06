import CardImage from './CardImage'
import { pagesInfo } from '../../../lib/pagesInfo'

const PagesSection = () => {
  return (
    <section id='pagesSect' className='w-full max-w-[1440px] h-[400px] lg:h-[500px] grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 grid-flow-col gap-7 sm:gap-12 px-10 lg:px-24 mb-10 lg:mb-24'>
      {
        pagesInfo.map((page, index) => (
          <CardImage key={index} {...page} />
        ))
      }
    </section>
  )
}

export default PagesSection
