// Detect scrolling and display the navbar when scrolling down
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Show navbar after scrolling 50px down
        navbar.style.display = "block"; // Show navbar
    } else {
        navbar.style.display = "none"; // Hide navbar when not scrolling
    }
};
