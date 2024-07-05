function helloMobiles() {
    var brand = document.getElementById("hello").value;
    var price = document.getElementById("price").value;
  
    // Perform validation if needed
  
    // Redirect to the next page with the selected brand and price range
    window.location.href = "search-results.html?hello=" + brand + "&price=" + price;
  }
  
// Add an event listener to each dropdown item
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor element

        const selectedBrand = this.dataset.value; // Get the selected brand from the data-value attribute
        
        // Update the text content of the dropdown toggle button with the selected brand
        document.getElementById('dropdownMenuButton').textContent = selectedBrand;

        // You can perform any further actions here, such as updating hidden inputs or triggering search functions.
    });
});
