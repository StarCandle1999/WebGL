walkMovement()

document.addEventListener("keydown", event => {

    if(event.code === "KeyI"){
        resetMovement();
        console.log("eventlistener orbit")
        orbitMovement();
    }
    if(event.code === "KeyO"){
        resetMovement();
        console.log("eventlistener fly")
        flyMovement();
    }
    if(event.code === "KeyP"){
        resetMovement();
        console.log("eventlistener walk")
        walkMovement();
    }
});

function orbitMovement(){
    console.log("orbit")
// Import camera control and rotation library

    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.noKeys = true;
}

function walkMovement(){
    console.log("Walk")
    controls.keys = {
        LEFT: 'KeyA', //left arrow
        UP: 'KeyQ', // up arrow
        RIGHT: 'KeyD', // right arrow
        BOTTOM: 'KeyE' // down arrow
    }
    controls.listenToKeyEvents( window );
    controls.enableDamping = true;
    controls.keyPanSpeed = 5;
}

function flyMovement(){
    console.log("Fly")
    controls.keys = {
        LEFT: 'KeyA', //left arrow
        UP: 'KeyQ', // up arrow
        RIGHT: 'KeyD', // right arrow
        BOTTOM: 'KeyE' // down arrow
    }
    controls.listenToKeyEvents( window );
    controls.enableDamping = true;
    controls.keyPanSpeed = 5;
}


function resetMovement(){
    console.log("Movement reset")
    controls.autoRotate = false;
    controls.noKeys = false;
    controls.enableDamping = false;
}