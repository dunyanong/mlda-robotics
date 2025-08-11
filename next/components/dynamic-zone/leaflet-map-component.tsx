"use client";

import { useEffect, useRef } from 'react';

interface LeafletMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function LeafletMap({ latitude, longitude, title }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let leaflet: any;
    const initializeMap = async () => {
      leaflet = await import('leaflet');

      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      }

      // Remove previous map instance if exists
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
        mapInstanceRef.current = leaflet.default.map(mapRef.current).setView([latitude, longitude], 15);
        leaflet.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);
        const customIcon = leaflet.default.divIcon({
          html: `<div style="width: 16px; height: 16px; background-color: #ef4444; border: 2px solid #ffffff; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
          className: 'custom-marker',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        leaflet.default.marker([latitude, longitude], { icon: customIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`<div style="color: #374151; font-weight: 500;">${title}</div>`);
      }
    };
    initializeMap();
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
    };
  }, [latitude, longitude, title]);

  return (
    <>
      <style jsx global>{`
        .leaflet-container {
          background-color: #242f3e !important;
          border-radius: 0.5rem;
        }
        .leaflet-tile {
          filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2);
        }
        .leaflet-control-zoom a {
          background-color: #374151 !important;
          color: #ffffff !important;
          border: 1px solid #4b5563 !important;
          line-height: 26px !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #4b5563 !important;
        }
        .leaflet-control-attribution {
          background-color: rgba(55, 65, 81, 0.9) !important;
          color: #d1d5db !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a {
          color: #9ca3af !important;
        }
        .leaflet-popup-content-wrapper {
          background-color: #ffffff !important;
          border-radius: 6px !important;
        }
        .leaflet-popup-tip {
          background-color: #ffffff !important;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
      
      <div 
        ref={mapRef} 
        className="w-full h-64 rounded-lg overflow-hidden border border-neutral-700"
        style={{ minHeight: '256px' }}
      />
    </>
  );
}