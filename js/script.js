// =====================================================
// Company Event Photo Booth
// Version: v0.4.0 (Development)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    // =====================================================
    // Application Configuration
    // =====================================================
    const APP_CONFIG = {

        VERSION: "0.4.2",

        DEV_MODE: true,

        DEFAULT_FRAME: "square",

        DEFAULT_CAMERA: "front",

     DEFAULT_COUNTDOWN: 3,

        TITLES: {
            CAMERA: "Preparing Camera...",
            PREVIEW: "Preview",
            DEVELOPER: "Developer Preview"
        }

    };


    // =====================================================
    // DOM Elements
    // =====================================================
    // Buttons
    const startButton = document.getElementById("startBtn");
    const continueButton = document.getElementById("continueBtn");
    const backButton = document.getElementById("backBtn");
    const captureButton = document.getElementById("captureBtn");
    const retakeButton = document.getElementById("retakeBtn");
    const continuePhotoButton = document.getElementById("continuePhotoBtn");

    // Screens
    const setupScreen = document.getElementById("setupScreen");
    const cameraScreen = document.getElementById("cameraScreen");
    const previewScreen = document.getElementById("previewScreen");
    const capturedPhoto = document.getElementById("capturedPhoto");
    
    // Camera
    const cameraPreview = document.getElementById("cameraPreview");
    const devPreview = document.getElementById("devPreview");
    const photoCanvas = document.getElementById("photoCanvas");
    const photoContext = photoCanvas.getContext("2d");
    const cameraTitle = document.querySelector(".camera-header h2");
    const cameraContainer = document.querySelector(".camera-container");

    // Frames
    const squareFrame = document.getElementById("squareFrame");
    const portraitFrame = document.getElementById("portraitFrame");
    const landscapeFrame = document.getElementById("landscapeFrame");

    const frameOverlays = {
        square: squareFrame,
        portrait: portraitFrame,
        landscape: landscapeFrame
    };

    function getCurrentFrameOverlay() {
        return frameOverlays[APP_STATE.selectedFrame];
    }

    function getCurrentCameraMode() {
        return CAMERA_MODES[APP_STATE.selectedFrame];
    }
    

    // =====================================================
    // Application State
    // =====================================================
    const APP_STATE = {

        currentStream: null,

        selectedFrame: APP_CONFIG.DEFAULT_FRAME,

        selectedCamera: APP_CONFIG.DEFAULT_CAMERA,

        selectedCountdown: APP_CONFIG.DEFAULT_COUNTDOWN

    };


    // =====================================================
    // Enumerations
    // =====================================================
    const FRAME_TYPES = {

        SQUARE: "square",

        PORTRAIT: "portrait",

        LANDSCAPE: "landscape"

    };

    const CAMERA_TYPES = {

        FRONT: "front",

        REAR: "rear"

    };

    const FRAME_PRESETS = {
        square: {
            overlay: squareFrame,
            aspectRatio: "1 / 1"
        },

        portrait: {
            overlay: portraitFrame,
            aspectRatio: "1240 / 1748"
        },

        landscape: {
            overlay: landscapeFrame,
            aspectRatio: "16 / 9"
        }
    };

    const CAMERA_MODES = {
        square: {
            aspectRatio: 1,

            canvasWidth: 1080,

            canvasHeight: 1080,

            frameId: "square"
        },

        portrait: {

            aspectRatio: 1240 / 1748,

            canvasWidth: 1240,

            canvasHeight: 1748,

            frameId: "portrait"

        },

        landscape: {

            aspectRatio: 16 / 9,

            canvasWidth: 1920,

            canvasHeight: 1080,

            frameId: "landscape"

        }
    
    };


    // =====================================================
    // Initialization
    // =====================================================
    initializeFrameSelector();
    initializeCameraSelector();
    initializeCountdownSelector();
    initializeEventListeners();


    // =====================================================
    // Screen Navigation (functions)
    // =====================================================
    function showScreen(screen) {
        setupScreen.classList.add("hidden");
        cameraScreen.classList.add("hidden");
        previewScreen.classList.add("hidden");

        screen.classList.remove("hidden");
    }

    function initializeFrameSelector() {

        const frameCards = document.querySelectorAll("[data-frame]");

        frameCards.forEach(card => {

            card.addEventListener("click", () => {

                // Remove previous selection
                frameCards.forEach(item =>
                    item.classList.remove("selected")
                );

                // Select current card
                card.classList.add("selected");

                // Update application state
                APP_STATE.selectedFrame = card.dataset.frame;

                // Refresh UI
                updateFrameOverlay();
                updatePreviewLayout();
            });
        });
    }

    function initializeCameraSelector() {

        const cameraCards = document.querySelectorAll("[data-camera]");

        cameraCards.forEach(card => {

            card.addEventListener("click", () => {

                cameraCards.forEach(item =>
                    item.classList.remove("selected")
                );

                card.classList.add("selected");

                APP_STATE.selectedCamera = card.dataset.camera;
            });
        });
    }

    function initializeCountdownSelector() {

        const countdownCards = document.querySelectorAll("[data-countdown]");

        countdownCards.forEach(card => {

            card.addEventListener("click", () => {

                countdownCards.forEach(item =>
                    item.classList.remove("selected")
                );

                card.classList.add("selected");

                APP_STATE.selectedCountdown =
                    Number(card.dataset.countdown);
            });
        });
    }

    function initializeEventListeners() {

        startButton.addEventListener("click", () => {
            startButton.style.display = "none";
            setupScreen.classList.remove("hidden");
        });

        continueButton.addEventListener("click", async () => {
            showScreen(cameraScreen);
            await startCamera();
        });
    
        backButton.addEventListener("click", () => {
            stopCamera();
            showScreen(setupScreen);
        });

        captureButton.addEventListener("click", () => {
            if (APP_CONFIG.DEV_MODE) {
                capturedPhoto.src = devPreview.src;
            } else {
                captureCurrentFrame();
            }
            showScreen(previewScreen);
        });

        retakeButton.addEventListener("click", () => {
            showScreen(cameraScreen);
        });
        
        continuePhotoButton.addEventListener("click", () => {
            alert("Coming in v0.6.0");
        });

    }   

    // =====================================================
    // Camera Functions
    // =====================================================
    async function startCamera() {

        updateFrameOverlay();
        updatePreviewLayout();

        if (APP_CONFIG.DEV_MODE) {
            cameraPreview.classList.add("hidden");
            devPreview.classList.remove("hidden");
            cameraTitle.textContent = "Developer Preview";
            return;
        }

    try {
        cameraTitle.textContent = "Preparing Camera...";
        const selectedCamera =
            document.querySelector('[data-camera].selected').dataset.camera;
            APP_STATE.currentStream =
                await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode:
                    selectedCamera === "front"
                        ? "user"
                        : "environment"
            },
            audio: false
        });

        cameraPreview.srcObject = APP_STATE.currentStream;
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
        if (APP_CONFIG.DEV_MODE) {
            devPreview.classList.add("hidden");
            cameraPreview.classList.remove("hidden");
            cameraTitle.textContent = "Camera Preview";
        }

        if (APP_STATE.currentStream) {
            APP_STATE.currentStream
                .getTracks()
                .forEach (track => track.stop());
            APP_STATE.currentStream = null;
            cameraPreview.srcObject = null;
        }
    }

    function captureCurrentFrame() {
        const canvas = photoCanvas;

        const context = canvas.getContext("2d");

        canvas.width = cameraPreview.videoWidth;
        canvas.height = cameraPreview.videoHeight;

        context.drawImage(
            cameraPreview,
            0,
            0,
            canvas.width,
            canvas.height
        );

        renderFinalPhoto();
    }

    function renderFinalPhoto() {

        const overlay = getCurrentFrameOverlay();

        const context = photoCanvas.getContext("2d");

            context.drawImage(
                overlay,
                0,
                0,
                photoCanvas.width,
                photoCanvas.height
        );

        capturedPhoto.src = photoCanvas.toDataURL("image/png");

    }


    // =====================================================
    // Overlay Functions
    // =====================================================
    function updatePreviewLayout() {

        const mode = getCurrentCameraMode();

        cameraContainer.style.aspectRatio = mode.aspectRatio;

    }
    
    function updateFrameOverlay() {

        const selectedFrame = APP_STATE.selectedFrame;

        // Hide every overlay
            Object.values(frameOverlays).forEach(frame => {
            frame.classList.add("hidden");
            });

        // Show the selected overlay
        frameOverlays[selectedFrame].classList.remove("hidden");
    }

    // =====================================================
    // Capture Functions
    // =====================================================

});