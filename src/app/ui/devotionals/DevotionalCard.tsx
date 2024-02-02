import DevotionalVideo from "./DevotionalVideo"

const DevotionalCard = ({ videoId, title, description }: { videoId: string, title: string, description: string }) => {
  return (
    <div className="w-full">
     <DevotionalVideo videoId={videoId} />
     <h2 className="font-black text-blueI text-lg sm:text-2xl px-3 mt-3">{title}</h2>
     <div className="hidden sm:flex flex-col w-full bg-grayI rounded-xl px-7 py-5 mt-3 gap-4">
      {
        description.split('\n').map((line, index) => (
          <p className="text-blueI text-sm" key={index}>{line}</p>
        ))
      }
     </div>
    </div>
  )
}
 
export default DevotionalCard
