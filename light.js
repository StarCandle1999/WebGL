function getLight(){
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(-25, 5, 0);

    return light;
}

function getAmbientLight(){
    // Define light
    const ambient = new THREE.AmbientLight(0x404040);

    return ambient
}