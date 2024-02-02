import { Suspense } from "react"
import Loading from "@/app/components/Loading"
import DevotionalCards from "./DevotionalCards"

const DevotionalBox = async () => {
  return (
    <main className="flex flex-col w-full items-center justify-center px-10 lg:px-44 mt-32 lg:mt-36">
      <div className='flex flex-col w-full items-center justify-center max-w-[1440px]'>
        <header>
          <h1 className='font-black text-center text-blueI text-3xl lg:text-5xl mt-8'>Devocionales</h1>
          <p className='font-normal text-blueI text-center mb-16 text-xl mt-1'>Nuestros últimos devocionales</p>
        </header>
      </div>
      <Suspense fallback={<Loading />}>
        <DevotionalCards />
      </Suspense>

      <div className="flex flex-col w-full gap-4 mt-20">
        <p className="font-semibold text-blueI text-sm sm:text-lg text-center">Disfruta de todos nuestros Devocionales en nuestra playlist de YouTube</p>
        <a
        className="w-full bg-red-700 text-white text-center font-semibold py-3 rounded-md"
        href="https://youtube.com/playlist?list=PL3s99LQJBc2NXnT29CIV5-VfgQfqHtmfW&si=mZFrCuMHOUKJw29c"
        target="_blank"
        >
          Playlist de YouTube
        </a>
      </div>
    </main>
  )
}
 
export default DevotionalBox
