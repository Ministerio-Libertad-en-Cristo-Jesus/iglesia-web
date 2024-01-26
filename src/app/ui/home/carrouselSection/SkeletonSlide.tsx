const SkeletonSlide = () => {
  return (
    <article className='flex w-full max-w-[1440px] relative z-[1] justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='flex flex-col w-full absolute left-10 bottom-8 lg:left-24 lg:bottom-16 gap-4'>
        <div className="bg-gray-400 w-2/3 h-10 rounded animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-400 w-2/3 h-4 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-2/3 h-4 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-2/3 h-4 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-2/3 h-4 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-400 w-16 h-4 rounded animate-pulse"></div>
      </div>

      <div className="bg-gray-300 h-[600px] w-full max-w-[1440px]"></div>

    </article>
  )
}

export default SkeletonSlide
