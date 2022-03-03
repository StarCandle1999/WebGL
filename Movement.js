const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
orbitControls.autoRotate = true;
orbitControls.autoRotateSpeed = 2;
orbitControls.noKeys = true;

const fpsControls = new THREE.FirstPersonControls(camera, renderer.domElement);
fpsControls.movementSpeed = 0.5;
fpsControls.lookSpeed = 0.0025
fpsControls.enabled = false;

walkMovement()

document.addEventListener("keydown", event => {

    if(event.code === "KeyI"){
        orbitMovement();
    }
    if(event.code === "KeyO"){
        flyMovement();
    }
    if(event.code === "KeyP"){
        walkMovement();
    }
});

function updateMovement(){
    if (orbitControls.enabled){
        orbitControls.update();
    } else if (fpsControls.enabled){
        fpsControls.update(1);
    }
}

function orbitMovement(){
    console.log("orbit")

    fpsControls.enabled = false
    orbitControls.enabled = true
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}

function walkMovement(){
    console.log("Walk")
    fpsControls.enabled = true
    orbitControls.enabled = false

    cameraLock[0] = 2;
    cameraLock[1] = 2;
}

function flyMovement(){
    console.log("Fly")
    fpsControls.enabled = true
    orbitControls.enabled = false
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}