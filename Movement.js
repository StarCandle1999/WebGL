document.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code === "KeyA") {
        camera.position.x--;
        renderer.render(scene, camera);
    } else if (event.code === "KeyD") {
        camera.position.x++;
        renderer.render(scene, camera);
    } else if (event.code === "KeyQ") {
        camera.position.y++;
        renderer.render(scene, camera);
    } else if (event.code === "KeyE"){
        camera.position.y--;
        renderer.render(scene, camera);
    }else if (event.code === "KeyW"){
        camera.position.z--;
        renderer.render(scene, camera);
    }else if (event.code === "KeyS"){
        camera.position.z++;
        renderer.render(scene, camera);
    }
}, false);