// Place this code in script.js

// Define the calculatePrice function
function calculatePrice() {
    var mobileModel = document.getElementById('mobileModel').value;
    var condition = document.getElementById('condition').value;

    // Here you would have your database or reference point for market rates
    // For simplicity, let's assume you have some predefined rates
    var marketRates = {
        'iPhone X': {
            'new': 100,
            'used': 60
        },
        'Samsung Galaxy S20': {
            'new': 110,
            'used': 70
        },
        // Add more mobile models and their rates as needed
    };

    // Get the price from the marketRates object based on the mobile model and condition
    var price = marketRates[mobileModel] ? marketRates[mobileModel][condition] : null;

    var resultDiv = document.getElementById('result');

    if (price) {
        resultDiv.innerText = 'Estimated price for ' + condition + ' ' + mobileModel + ' : ' + price + ' k';
    } else {
        resultDiv.innerText = 'Price information not available for ' + mobileModel;
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('button[type="button"]');
    button.addEventListener('click', calculatePrice);
});
