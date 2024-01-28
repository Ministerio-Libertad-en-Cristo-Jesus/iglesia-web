const CardSkeleton = () => {
  return (
    <article className='w-60 min-w-[15rem] lg:min-w-[20rem] lg:w-80 bg-[#d6d6d6] rounded-t-xl rounded-b-xl hover:shadow-md lg:hover:shadow-xl hover:cursor-pointer transition-all duration-200'>
      <div className="w-60 bg-gray-400 min-w-[15rem] lg:min-w-[20rem] lg:w-80 rounded-t-xl h-36 lg:h-44"></div>
      
      <div className='w-full p-2 lg:p-5'>
        <div className="bg-gray-400 w-full h-6 rounded animate-pulse"></div>
        <div className="bg-gray-400 w-1/2 h-4 mt-3 rounded animate-pulse"></div>
        <div className="w-full mt-3">
          <div className="bg-gray-400 w-full h-5 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-full h-5 mt-2 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-400 w-1/3 h-3 mt-2 rounded animate-pulse"></div>
      </div>

    </article>
  )
}

export default CardSkeleton
