const mapboxgl = require("mapbox-gl");

const icons = {
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)',
}

function createMarker(type, lat, long){
  const marker = document.createElement("div")
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = icons[type];

  return new mapboxgl.Marker(marker).setLngLat([lat, long]);
}

module.exports = createMarker;
