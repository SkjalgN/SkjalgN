

document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll('#navbarLinks .nav-link');
    var currentLocation = location.pathname;
    console.log(currentLocation);
    navbarLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});