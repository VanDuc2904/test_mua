// Initialize the map
var map = L.map('map').setView([21.0285, 105.8542], 10); // Example: Hanoi, Vietnam

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add the OpenWeather precipitation layer
var apiKey = '  var apiKey = '12118cdb333f0039947273d009989237';
';  // Thay thế bằng OpenWeather API Key của bạn
L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: 'Rainfall data © OpenWeatherMap',
  opacity: 0.7
}).addTo(map);

// Fetch and load the GeoJSON data
fetch('./your_shapefile.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // Add the GeoJSON layer to the map
    L.geoJSON(data, {
      style: function(feature) {
        return {color: 'blue', fillOpacity: 0.5};  // Style options
      }
    }).addTo(map);
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });
