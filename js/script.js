document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startBtn");
    const setupScreen = document.getElementById("setupScreen");
    const continueButton = document.getElementById("continueBtn");
    const cameraScreen = document.getElementById("cameraScreen");
    const backButton = document.getElementById("backBtn");
    const cameraPreview = document.getElementById("cameraPreview");
const cameraTitle = document.querySelector(".camera-header h2");

let currentStream = null;

    



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


    continueButton.addEventListener("click", async () => {

    showScreen(cameraScreen);

    await startCamera();

});

backButton.addEventListener("click", () => {

    stopCamera();

    showScreen(setupScreen);

});

    function showScreen(screen) {

    setupScreen.classList.add("hidden");
    cameraScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}
async function startCamera() {

    try {

        cameraTitle.textContent = "Preparing Camera...";

        const selectedCamera =
            document.querySelector('[data-camera].selected').dataset.camera;

        currentStream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode:
                    selectedCamera === "front"
                        ? "user"
                        : "environment"
            },

            audio: false

        });

        cameraPreview.srcObject = currentStream;

        cameraTitle.textContent = "Position Yourself";

    }

    catch (error) {

        alert(
            "Camera access is required to use the Photo Booth.\n\nPlease allow camera permission and try again."
        );

        showScreen(setupScreen);

    }

}

function stopCamera() {

    if (!currentStream) return;

    currentStream.getTracks().forEach(track => track.stop());

    currentStream = null;

}

});