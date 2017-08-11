const createMarker = require('./marker')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZm9ycmVzdHdlaXN3b2xmIiwiYSI6ImNqNjgzbzZidTBicXYzMnBsd2Vib3dyMDIifQ.QoJCtUmn8qbtM9iosPGlhA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

createMarker("activity", -74.009, 40.705).addTo(map);
