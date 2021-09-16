function openNav() {
    document.getElementById("sidebar").style.top = "0px";
    document.getElementById("sidebar").style.transition = "0.5s ease";
}

function closeNav() {
    document.getElementById("sidebar").style.top = "-100%";
    document.getElementById("sidebar").style.transition = "0.5s ease";
}