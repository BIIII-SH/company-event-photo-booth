// =====================================
// Company Event Photo Booth
// Version 1.0
// =====================================

// ---------- CONFIG ----------

const APP_CONFIG = {
    frames: {
        square: "assets/frame-square.png",
        portrait: "assets/frame-portrait.png"
    },
    filenamePrefix: "PaydayFridayAug2026"
};

// ---------- ELEMENTS ----------

const homeScreen = document.getElementById("homeScreen");
const cameraScreen = document.getElementById("cameraScreen");
const previewScreen = document.getElementById("previewScreen");

const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");

const video = document.getElementById("video");
const frameOverlay = document.getElementById("frameOverlay");

let stream = null;

// =====================================
// Start Camera
// =====================================

startButton.addEventListener("click", startCamera);

backButton.addEventListener("click", () => {

    stopCamera();

    cameraScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");

});

// =====================================

async function startCamera() {

    try {

        const layout =
            document.querySelector('input[name="layout"]:checked').value;

        const camera =
            document.querySelector('input[name="camera"]:checked').value;

        frameOverlay.src = APP_CONFIG.frames[layout];

        stream = await navigator.mediaDevices.getUserMedia({

            video: {

                facingMode: camera

            },

            audio: false

        });

        video.srcObject = stream;

        homeScreen.classList.add("hidden");
        cameraScreen.classList.remove("hidden");

    }

    catch (error) {

        alert(
            "Unable to access the camera.\n\nPlease allow camera permission."
        );

        console.error(error);

    }

}

// =====================================

function stopCamera() {

    if (!stream) return;

    stream.getTracks().forEach(track => track.stop());

    stream = null;

}