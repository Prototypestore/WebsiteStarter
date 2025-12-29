// Fetch the JSON file and display services in the HTML
fetch('services.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('services-container');

    // Loop through each service and create HTML elements
    data.services.forEach(service => {
      const serviceDiv = document.createElement('div');

      serviceDiv.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <p class="price">$${service.price}</p>
      `;

      container.appendChild(serviceDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching services.json:', error);
    const container = document.getElementById('services-container');
    container.innerHTML = '<p>Failed to load services. Please try again later.</p>';
  });
