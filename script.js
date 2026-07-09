const startButton = document.getElementById("startBtn");
const setupScreen = document.getElementById("setupScreen");
const continueButton = document.getElementById("continueBtn");


startButton.addEventListener("click", () => {

    startButton.style.display = "none";

    setupScreen.classList.remove("hidden");

});


const optionCards = document.querySelectorAll(".option-card");


optionCards.forEach(card => {

    card.addEventListener("click", () => {

        const group = card.parentElement;

        group.querySelectorAll(".option-card")
        .forEach(item => {
            item.classList.remove("selected");
        });


        card.classList.add("selected");

    });

});


continueButton.addEventListener("click", () => {

    alert("Camera setup will be added in Milestone 3!");

});