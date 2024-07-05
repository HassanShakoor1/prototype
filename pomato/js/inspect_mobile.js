document.addEventListener('DOMContentLoaded', function() {
    // Function to display mobile properties
    function displayMobileProperties(properties) {
        const mobilePropertiesDiv = document.getElementById('mobile-properties');
        mobilePropertiesDiv.innerHTML = ''; // Clear previous properties

        for (const [key, value] of Object.entries(properties)) {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property');
            propertyDiv.innerHTML = `<strong>${key}:</strong> ${value}`;
            mobilePropertiesDiv.appendChild(propertyDiv);
        }
    }

    // Dummy data for demonstration
    const dummyProperties = {
        'Brand': 'Iphone',
        'Model': ' xs max',
        'IMEI': '123456789012345',
        'Storage Capacity': '128 GB',
        'Color': 'golden',
        // Add more properties as needed
    };

    // Display dummy properties on page load (replace with actual code to retrieve properties)
    displayMobileProperties(dummyProperties);
});
