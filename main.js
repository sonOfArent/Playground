const body = document.querySelector("body")
const dropdownCheckbox = document.querySelector("#dropdown-checkbox");
const dropdownMenu = document.querySelector(".dropdown");

body.addEventListener("click", function() {
    console.log("Clicked");
    if (dropdownCheckbox.checked) {
        dropdownMenu.style.overflow = "visible";
    } else {
        dropdownMenu.style.overflow = "hidden";
    }
})