const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const getInTouchForm = document.querySelector(".form-intro .form");
const cardGrid = document.querySelector(".card-grid");
const dropdownCheckbox = document.querySelector("#dropdown-checkbox");
const dropdownMenu = document.querySelector(".dropdown");
const nightModeToggler = document.querySelector("#nightMode");
const navbar = document.querySelector("section.navbar");
const nightModeCard = document.querySelector(".nightMode-card");
const transparencyRadio = document.querySelector(".features-grid :nth-of-type(1)");
const transparencyRadioButtons = document.querySelectorAll(".features-radio input[type='radio']");

// About //
const modals = document.querySelectorAll(".modal");
const modalsSection = document.querySelector("section.modals");

// I need to have the modals section checking for a click input, checking the event target's parent ID or grandparent's ID (for which modal it is), then have that modal show. I can have the close buttons in a separate listener to do the same thing, effectively.


// Event Listeners
navbar.addEventListener("input", function(event) {
    if (dropdownCheckbox.checked) {
        console.log("Toggled visible.")
        dropdownMenu.style.overflow = "visible";
    } else {
        console.log("Toggled hidden.")
        dropdownMenu.style.overflow = "hidden";
    }
})

transparencyRadio.addEventListener("input", function() {
    transparencyRadioButtons.forEach(button => {
        if (button.checked) {
            console.log(button.id);
            if (button.id == "featuresRadio-0") {
                transparencyRadio.style.opacity = "0";
            }
            console.log(button.id);
            if (button.id == "featuresRadio-25") {
                transparencyRadio.style.opacity = "25%";
            }
            console.log(button.id);
            if (button.id == "featuresRadio-50") {
                transparencyRadio.style.opacity = "50%";
            }
            console.log(button.id);
            if (button.id == "featuresRadio-75") {
                transparencyRadio.style.opacity = "75%";
            }
            console.log(button.id);
            if (button.id == "featuresRadio-100") {
                transparencyRadio.style.opacity = "100%";
            }
        }
    });
})


nightModeCard.addEventListener("input", function() {
    if (nightModeToggler.checked) {
        console.log("Night mode toggled.");

        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#202020";
        
        cardGrid.style.backgroundColor = "#202020";

    }
    else {
        console.log("Day mode toggled.");
        body.style.backgroundImage = "var(--primary-gradient)";
        cardGrid.style.backgroundColor = "antiquewhite"
    }
})
