// Importación de useEffect desde React para manejar efectos secundarios en componentes funcionales
import { useEffect } from 'react'

// Importación de componentes para la sección de la página de inicio
import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'
import MapSection from './mapsSection/MapSection'
import OfferingSection from './offeringSection/OfferingSection'
import PagesSection from './pagesSection/PagesSection'
import SocialMediaSection from './socialMediaSection/SocialMediaSection'

const Home = () => {
  // useEffect para ejecutar una acción cuando el componente se monta (componentDidMount)
  useEffect(() => {
    // Hace scroll hacia arriba al cargar la página (posición 0,0)
    window.scrollTo(0, 0)
  }, []) // El array vacío asegura que el efecto se ejecute solo una vez (en el montaje)

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

export default Home
