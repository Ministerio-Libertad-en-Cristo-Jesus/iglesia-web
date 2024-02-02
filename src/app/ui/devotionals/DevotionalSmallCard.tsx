import DevotionalVideo from "./DevotionalVideo"

const DevotionalSmallCard = ({ videoId, title }: { videoId: string, title: string}) => {
  return (
    <div className="w-full">
     <DevotionalVideo videoId={videoId} />
     <h2 className="font-black text-blueI text-lg sm:text-xs lg:text-sm px-3 mt-2">{title}</h2>
    </div>
  )
}
 
export default DevotionalSmallCard
