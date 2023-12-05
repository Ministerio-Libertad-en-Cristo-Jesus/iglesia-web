import PreachSection from "./ui/home/PreachsSection/PreachSection";
import Carrousel from "./ui/home/carrouselSection/Carrousel";
import MapSection from "./ui/home/mapsSection/MapSection";
import OfferingSection from "./ui/home/offeringSection/OfferingSection";
import PagesSection from "./ui/home/pagesSection/PagesSection";
import SocialMediaSection from "./ui/home/socialMediaSection/SocialMediaSection";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center mt-20'>
      <Carrousel />
      <PreachSection />
      <OfferingSection />
      <PagesSection />
      <MapSection />
      <SocialMediaSection />
    </main>
  )
}
