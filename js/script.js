// =====================================================
// Company Event Photo Booth
// Version: v0.4.0 (Feature Branch)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    const APP_CONFIG = {

    DEV_MODE: true

};

    // =====================================================
    // DOM Elements
    // =====================================================

    const startButton = document.getElementById("startBtn");
    const setupScreen = document.getElementById("setupScreen");
    const continueButton = document.getElementById("continueBtn");
    const cameraScreen = document.getElementById("cameraScreen");
    const backButton = document.getElementById("backBtn");
    const cameraPreview = document.getElementById("cameraPreview");
    const cameraTitle = document.querySelector(".camera-header h2");
    const squareFrame = document.getElementById("squareFrame");
    const portraitFrame = document.getElementById("portraitFrame");

    const devPreview = document.getElementById("devPreview");

    // =====================================================
    // Application State
    // =====================================================

    let currentStream = null;

    // =====================================================
    // Option Card Selection
    // =====================================================

    const optionCards = ...

    // =====================================================
    // Event Listeners
    // =====================================================

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

    if (APP_CONFIG.DEV_MODE) {

    devPreview.classList.add("hidden");

    cameraPreview.classList.remove("hidden");

    return;

}

    stopCamera();

    showScreen(setupScreen);

});

    // =====================================================
    // Screen Navigation
    // =====================================================

    function showScreen(screen) {

    setupScreen.classList.add("hidden");
    cameraScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}

    // =====================================================
    // Camera Functions
    // =====================================================

    async function startCamera() {
        if (APP_CONFIG.DEV_MODE) {

        cameraPreview.classList.add("hidden");

        devPreview.classList.remove("hidden");
            
    updateFrameOverlay();

    cameraTitle.textContent = "Developer Preview";

    return;

}

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

    // =====================================================
    // Overlay Functions
    // =====================================================

function updateFrameOverlay() {

    const selectedFrame =
        document.querySelector("[data-frame].selected").dataset.frame;

    if (selectedFrame === "square") {

        squareFrame.classList.remove("hidden");
        portraitFrame.classList.add("hidden");

    } else {

        portraitFrame.classList.remove("hidden");
        squareFrame.classList.add("hidden");

    }

}

});