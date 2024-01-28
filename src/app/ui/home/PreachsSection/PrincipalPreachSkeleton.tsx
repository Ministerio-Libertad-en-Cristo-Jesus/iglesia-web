const PrincipalPreachSkeleton = () => {
  return (
    <article className='flex flex-wrap w-full p-10 lg:p-24 lg:flex-nowrap items-center  max-w-[1440px]'>

      <div className='bg-gray-400 min-w-full lg:min-w-[420px] lg:w-[420px] h-[370px] lg:h-[420px] mr-12 rounded-xl animate-pulse'></div>

      <div className='flex flex-col w-full mt-8 lg:mt-0 items-center'>

        <div className="w-full">
          <div className='bg-gray-400 w-9/12 h-10 rounded animate-pulse'></div>
          <div className='bg-gray-400 w-1/2 h-6 mt-2 lg:mt-6 rounded animate-pulse'></div>
          <div className='bg-gray-400 w-1/3 h-4 mt-3 rounded animate-pulse'></div>
          <div className="w-full mt-6">
            <div className='bg-gray-400 w-9/12 h-5 mt-1 rounded animate-pulse'></div>
            <div className='bg-gray-400 w-9/12 h-5 mt-1 rounded animate-pulse'></div>
            <div className='bg-gray-400 w-9/12 h-5 mt-1 rounded animate-pulse'></div>
          </div>
        </div>

        <div className="bg-gray-400 w-32 h-12 rounded mt-8 animate-pulse"></div>

      </div>

    </article>
  )
}

export default PrincipalPreachSkeleton
