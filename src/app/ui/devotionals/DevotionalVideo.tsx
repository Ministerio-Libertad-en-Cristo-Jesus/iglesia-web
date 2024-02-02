const DevotionalVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative w-full pb-[56.25%]">
      <iframe
      className="absolute w-full h-full top-0 left-0 rounded-md"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder='0'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}></iframe>
    </div>
  )
}
 
export default DevotionalVideo
