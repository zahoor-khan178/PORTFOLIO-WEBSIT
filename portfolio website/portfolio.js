
var typed = new Typed('#element', {
    strings: ['Video Editor', 'Graphic Designer', 'Digital Marketer', 'Web Developer'],
    typeSpeed: 60,
});








function showDropdown() {
    document.querySelector(".dropd").style.display = "block"; 
}


function hideDropdown() {
    document.querySelector(".dropd").style.display = "none"; 
}


const proElement = document.getElementById("pro");
const dropdown = document.querySelector(".dropd");

proElement.addEventListener("mouseenter", showDropdown);
proElement.addEventListener("mouseleave", hideDropdown);

dropdown.addEventListener("mouseenter", showDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);






