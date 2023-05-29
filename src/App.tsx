import type { Component } from 'solid-js';
import mapboxgl from 'mapbox-gl';


import styles from './App.module.css';


const App = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibmljbzIyc3AiLCJhIjoiY2pxZXE4cHFqMDQ2cjQzcWoybTdycG1mOSJ9.BCmKqIglS5pygsh-e7FITw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  return (
    <div id="map"></div>
  );
};

export default App;
