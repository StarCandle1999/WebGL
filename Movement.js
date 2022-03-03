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
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}

function walkMovement(){
    console.log("Walk")
    fpsControls.enabled = true
    orbitControls.enabled = false
    // controls.keys = {
    //     LEFT: 'KeyA', //left arrow
    //     UP: 'KeyQ', // up arrow
    //     RIGHT: 'KeyD', // right arrow
    //     BOTTOM: 'KeyE' // down arrow
    // }
    //
    // // controls.listenToKeyEvents( window );
    // document.addEventListener('keydown', (event) => {
    //     console.log(event.code);
    //     if (event.code === "KeyA") {
    //         camera.position.x--;
    //         renderer.render(scene, camera);
    //     } else if (event.code === "KeyD") {
    //         camera.position.x++;
    //         renderer.render(scene, camera);
    //     } else if (event.code === "KeyQ") {
    //         camera.position.y++;
    //         renderer.render(scene, camera);
    //     } else if (event.code === "KeyE"){
    //         camera.position.y--;
    //         renderer.render(scene, camera);
    //     }else if (event.code === "KeyW"){
    //         camera.position.z--;
    //         renderer.render(scene, camera);
    //     }else if (event.code === "KeyS"){
    //         camera.position.z++;
    //         renderer.render(scene, camera);
    //     }
    // }, false);
    // controls.enableDamping = true;
    // controls.keyPanSpeed = 5;
    // cameraLock[0] = 2;
    // cameraLock[1] = 2;
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
    cameraLock[0] = 1;
    cameraLock[1] = 500;
}


function resetMovement(){
    console.log("Movement reset")
    controls.autoRotate = false;
    controls.noKeys = false;
    controls.enableDamping = false;
}