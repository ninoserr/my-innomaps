import type { Component } from 'solid-js';
import mapboxgl from 'mapbox-gl';

// import style from './App.module.css';

const MapboxMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibmljbzIyc3AiLCJhIjoiY2pxZXE4cHFqMDQ2cjQzcWoybTdycG1mOSJ9.BCmKqIglS5pygsh-e7FITw';
  const map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
    center: [-79.5, -2.4], // starting position [lng, lat]
    zoom: 8 // starting zoom
  });

  return (
    <div id="mapa"></div>
  );
};

export default MapboxMap;
