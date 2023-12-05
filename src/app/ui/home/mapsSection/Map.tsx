import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { type MapType } from '../../../lib/definitions'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customMarkerIcon = L.icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const Map = ({ position, popup }: MapType) => {
  return (
    <MapContainer className='w-screen xl:w-[500px] h-[350px] sm:h-[500px] z-0' center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; Ministerio Libertad en Cristo Jesus'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          {popup}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
