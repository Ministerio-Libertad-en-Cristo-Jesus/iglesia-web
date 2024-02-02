import { YOUTUBE_PLAYLIST_ITEMS_API } from "@/app/constants"
import axios from "axios"
import { YoutubeVideos } from "./definitions"
import DevotionalCard from "./DevotionalCard"
import { revalidatePath } from "next/cache"
import DevotionalSmallCard from "./DevotionalSmallCard"

const apiKey = process.env.YOUTUBE_API_KEY || ''
const playlistId = process.env.YOUTUBE_PLAYLIST_ID || ''

async function getPlaylistItems () {
  revalidatePath('/devotionals')
  const timestamp = Date.now()
  try {
    const res = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}&timestamp=${timestamp}`)
    return res.data as YoutubeVideos
  } catch (error) {
    console.log(error)
    throw new Error('error al traer los videos')
  }
}

const DevotionalCards = async () => {
  const { items } = await getPlaylistItems()
  const [firstItem, ...restItems] = items
  return (
    <div className="flex flex-col sm:flex-row w-full gap-16">
      <div className="w-full sm:w-[70%]">
        <DevotionalCard key={firstItem.id} videoId={firstItem.snippet.resourceId.videoId} title={firstItem.snippet.title} description={firstItem.snippet.description} />
      </div>
      <div className="flex flex-col w-full sm:w-[30%] gap-12">
        {
          restItems.map((item) => (
            <DevotionalSmallCard key={item.id} videoId={item.snippet.resourceId.videoId} title={item.snippet.title} />
          ))
        }
      </div>
    </div>
  )
}
 
export default DevotionalCards
