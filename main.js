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
const experienceAndAccomplishments = document.querySelector("section.experience-and-accomplishments");
const experienceFlex = document.querySelector(".experience-flex");
const languages = [];
const modalsSection = document.querySelector(".modals")
const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
    let modalLanguage = modal.id.split("Modal");
    languages.push(modalLanguage[0]);
});

const modalCloseButtons = document.querySelectorAll(".modal-close");


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

if (transparencyRadio) {
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
}

if (nightModeCard) {
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
}
if (experienceFlex) {
    experienceFlex.addEventListener("click", openModal)
}


if (modalsSection) {
    modalsSection.addEventListener("click", function(event) {
        let closeButton = event.target.parentElement.parentElement;
        let toClose = closeButton.parentElement.parentElement;
    
        closeButton.classList.forEach(classElement => {
            if (classElement == "modal-close") {
                toClose.style.display = "none";
            }
        });
    })
}


// Event Listener Functions
function openModal(event) {
    // This is for after I've figured it out.
    let currentModal = (event.target.parentElement);

    if (currentModal.id !== "") {

        let currentModalLanguage = currentModal.id.split("Card");

        let toOpen = document.querySelector(`#${currentModalLanguage[0]}Modal`);

        toOpen.style.display = "block";
    }
}

function closeModal(event) {

}

console.log(body.offsetWidth);