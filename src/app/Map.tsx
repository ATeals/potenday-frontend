import { useState, useEffect } from "react";
import { Marker, NaverMap, useNavermaps } from "react-naver-maps";

export function Map() {
  const navermaps = useNavermaps();

  const [myLocation, setMyLocation] = useState<{ lat: number; lng: number }>({
    lat: 37.3595704,
    lng: 127.105399,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log("Coordinates: " + position.coords.latitude + ", " + position.coords.longitude);
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, [navermaps]);

  const center = new navermaps.LatLng(myLocation.lat, myLocation.lng);

  const isDefaultLocation = myLocation.lat === 37.3595704 && myLocation.lng === 127.105399;

  return (
    <NaverMap center={center} zoom={15} defaultMapTypeId={navermaps.MapTypeId.NORMAL}>
      {!isDefaultLocation && <Marker position={center} />}
    </NaverMap>
  );
}
