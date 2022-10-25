document.addEventListener("DOMContentLoaded", () => {
    let bars = document.querySelector(".bars-click");
    let menuBox = document.querySelector(".menuBox");
    let menuBoxButton = document.querySelector(".popOutButton");

    bars.addEventListener("click", () => {

        menuBox.classList.add("active2");
    });

    menuBoxButton.addEventListener("click" , () => {
        menuBox.classList.remove("active2");

    });
    
});