import { YOUTUBE_PLAYLIST_ITEMS_API } from "@/app/constants"
import axios from "axios"
import { YoutubeVideos } from "./definitions"
import DevotionalCard from "./DevotionalCard"
import { revalidatePath } from "next/cache"

const apiKey = process.env.YOUTUBE_API_KEY || ''
const playlistId = process.env.YOUTUBE_PLAYLIST_ID || ''

async function getPlaylistItems () {
  revalidatePath('/devotionals')
  const timestamp = Date.now()
  try {
    const res = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${apiKey}&timestamp=${timestamp}`)
    return res.data as YoutubeVideos
  } catch (error) {
    console.log(error)
    throw new Error('error al traer los videos')
  }
}

const DevotionalCards = async () => {
  const { items } = await getPlaylistItems()
  return (
    <div className="flex flex-col w-full gap-20">
      {
        items.map((item) => (
          <DevotionalCard key={item.id} videoId={item.snippet.resourceId.videoId} title={item.snippet.title} />
        ))
      }
    </div>
  )
}
 
export default DevotionalCards
