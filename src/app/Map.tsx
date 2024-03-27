import { Icon } from "@UI/icon";
import { useState, useEffect } from "react";
import { Marker, NaverMap, useMap, useNavermaps } from "react-naver-maps";
import { create } from "zustand";

const getGeolocation = () =>
  new Promise((resolve: (value: GeolocationPosition) => unknown, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

interface Location {
  lat: number;
  lng: number;
}

interface LocationStore {
  location: Location;
  setLocation: (location: Location) => void;
  clear: () => void;
}

const useGeolocation = create<LocationStore>((set) => ({
  location: { lat: 37.3595704, lng: 127.105399 },
  clear: () => set((state) => ({ ...state, location: { lat: 37.3595704, lng: 127.105399 } })),
  setLocation: ({ lat, lng }: Location) =>
    set((state) => ({ ...state, location: { ...state.location, lat, lng } })),
}));

export const useGeolocationAction = () =>
  useGeolocation((state) => {
    state.setLocation, state.clear;
  });

export const useGeolocationState = () => useGeolocation((state) => state.location);

export function Map() {
  const navermaps = useNavermaps();

  const { location, setLocation } = useGeolocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGeolocation()
      .then((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      })
      .finally(() => setIsLoading(false));
  }, [navermaps, setLocation]);

  const center = new navermaps.LatLng(location.lat, location.lng);

  const isDefaultLocation = location.lat === 37.3595704 && location.lng === 127.105399;

  return (
    <NaverMap center={center} zoom={15} defaultMapTypeId={navermaps.MapTypeId.NORMAL}>
      {!isDefaultLocation && <Marker position={center} />}
      {isLoading ? (
        <div className="relative w-full h-full bg-gray-300 bg-opacity-40 flex justify-center items-center">
          내 위치 불러오는 중...
        </div>
      ) : (
        <div className="relative p-2">
          <NaverMapPanToButton location={{ lat: location.lat, lng: location.lng }} />
        </div>
      )}
    </NaverMap>
  );
}

const NaverMapPanToButton = ({
  location,
  onClick,
}: {
  location: { lat: number; lng: number };
  onClick?: () => void;
}) => {
  const naverMap = useMap();

  const handleMyLocation = () => {
    naverMap?.panTo(location);
    naverMap?.setZoom(15);
    onClick?.();
  };

  return (
    <button
      onClick={handleMyLocation}
      className="bg-gray-300 bg-opacity-60 rounded-[50%] p-1 w-8 h-8"
    >
      <Icon icon="crosshair" size="sm" />
    </button>
  );
};
