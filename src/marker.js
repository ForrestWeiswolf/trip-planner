const icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
}

function createMarker(type, lat, long){
  const marker = document.createElement("div")
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = icons[type];

  new mapboxgl.Marker(marker).setLngLat([lat, long]).addTo(map);
}

module.exports = createMarker
