var navLinks = document.getElementById("navLinks"); 

function showMenu(){
    navLinks.style.right ="0";
}

function hideMenu(){
    navLinks.style.right ="-300px";
console.log(navLinks)
}

document.addEventListener("DOMContentLoaded", function() {
    hideMenu();
});

