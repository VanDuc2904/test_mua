// Initialize the map centered at a specific location (latitude, longitude)
var map = L.map('map').setView([21.0285, 105.8542], 10); // Example: Hanoi, Vietnam

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add OpenWeather rainfall layer using OpenWeatherMap API
var apiKey = '12118cdb333f0039947273d009989237';  // Your OpenWeather API Key
L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
  attribution: 'Rainfall data © OpenWeatherMap',
  opacity: 0.7
}).addTo(map);
setInterval(function() {
  map.eachLayer(function(layer) {
    if (layer.options && layer.options.attribution === 'Rainfall data © OpenWeatherMap') {
      map.removeLayer(layer); // Remove the old rainfall layer
    }
  });
  
  // Add a new updated rainfall layer
  L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
    attribution: 'Rainfall data © OpenWeatherMap',
    opacity: 0.7
  }).addTo(map);
}, 300000); // Updates every 5 minutes
