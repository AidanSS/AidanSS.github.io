
var checkbox = document.getElementById("nav_projects");
checkbox.addEventListener("click", scrolltoID())
    
function scrolltoId(){
    var access = document.getElementById("projects");
    access.scrollIntoView({behavior: 'smooth'}, true);
    }