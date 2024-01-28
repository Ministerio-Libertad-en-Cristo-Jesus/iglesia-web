import UserPlacehoderSmall from "@/app/components/componentSVG/UserPlaceHolderSmall"

const LoadingCard = async () => {
  return (
    <article className="flex bg-blueI items-center justify-start rounded-xl py-2 pl-3 pr-10 gap-2">
      <div>
        <UserPlacehoderSmall />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-black text-sm bg-grayII rounded-md text-grayII">name lastname</h3>
        <p className="bg-grayII rounded-md text-grayII text-xs">example@gmail.com</p>
      </div>
    </article>
  )
}
 
export default LoadingCard
