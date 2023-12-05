'use client'
import 'leaflet/dist/leaflet.css'
import HeaderMapSection from './HeaderMapSection'
import SelectorMap from './SelectorMap'
import { useState } from 'react'
import MapCarrousel from './MapCarrousel'

const MapSection = () => {
  const [MapActive, setMapActive] = useState({
    paricua: false,
    orlando: true
  })
  return (
    <section id='mapSect' className='flex flex-col items-center w-full py-16 bg-blueI mb-10 lg:mb-24'>
      <HeaderMapSection />
      <MapCarrousel whatSelected={MapActive}/>
      <SelectorMap whatSelected={MapActive} changeMap={setMapActive} />
    </section>
  )
}

export default MapSection
