import { MapContainer, Marker, TileLayer } from 'react-leaflet';
interface IMap {
  latitude: number;
  longitude: number;
}
function Map({ latitude, longitude }: IMap) {
  return (
    <MapContainer
      className="min-h-28 h-full"
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}></Marker>
    </MapContainer>
  );
}

export default Map;
