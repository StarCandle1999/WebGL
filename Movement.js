walkMovement()

document.addEventListener("keydown", event => {

    if(event.code === "KeyI"){
        resetMovement();
        orbitMovement();
    }
    if(event.code === "KeyO"){
        resetMovement();
        flyMovement();
    }
    if(event.code === "KeyP"){
        resetMovement();
        walkMovement();
    }
});

function orbitMovement(){
    console.log("orbit")
// Import camera control and rotation library

    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    orbitControls.noKeys = true;

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


function resetMovement(){
    console.log("Movement reset")
    // controls.autoRotate = false;
    // controls.noKeys = false;
    // controls.enableDamping = false;
}