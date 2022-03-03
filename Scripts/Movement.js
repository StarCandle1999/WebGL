//create orbitcontrols
const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
orbitControls.autoRotate = true;
orbitControls.autoRotateSpeed = 2;
orbitControls.noKeys = true;

//create fps controls
const fpsControls = new THREE.FirstPersonControls(camera, renderer.domElement);
fpsControls.movementSpeed = 0.5;
fpsControls.lookSpeed = 0.0025
fpsControls.enabled = false;

//we start in the walk movement
walkMovement()

//listen if the user requests other movement
document.addEventListener("keydown", event => {

    if (event.code === "KeyI") {
        orbitMovement();
    }
    if (event.code === "KeyO") {
        flyMovement();
    }
    if (event.code === "KeyP") {
        walkMovement();
    }
});

function updateMovement() {
    if (orbitControls.enabled) {
        orbitControls.update();
    } else if (fpsControls.enabled) {
        fpsControls.update(1);
    }
}

function orbitMovement() {
    console.log("orbit")

    fpsControls.enabled = false
    orbitControls.enabled = true
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}

function walkMovement() {
    console.log("Walk")
    fpsControls.enabled = true
    orbitControls.enabled = false

    cameraLock[0] = 2;
    cameraLock[1] = 2;
}

function flyMovement() {
    console.log("Fly")
    fpsControls.enabled = true
    orbitControls.enabled = false
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}