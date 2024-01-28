const CardSmallSkeleton = () => {
  return (
    <article className='w-60 min-w-[15rem] bg-[#d6d6d6] rounded-t-xl rounded-b-xl hover:shadow-md hover:cursor-pointer transition-all duration-200'>
      <div className="bg-gray-400 w-60 min-w-[15rem] rounded-t-xl h-36 animate-pulse"></div>
      
      <div className='w-full p-2 lg:p-4'>
        <div className="bg-gray-400 w-full h-5 rounded animate-pulse"></div>
        <div className="bg-gray-400 w-1/2 h-3 mt-3 rounded animate-pulse"></div>
        <div className="w-full mt-3">
          <div className="bg-gray-400 w-full h-4 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-full h-4 mt-2 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-400 w-1/3 h-2 mt-2 rounded animate-pulse"></div>
      </div>

    </article>
  )
}

export default CardSmallSkeleton
