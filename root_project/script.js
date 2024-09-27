// Initialize the map
var map = L.map('map').setView([21.0285, 105.8542], 10); // Example: Hanoi, Vietnam

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetch and load the GeoJSON data
fetch('C:\\Users\\vandu\\OneDrive\\root_project\\your_shapefile.json')  // Path to your GeoJSON file
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
