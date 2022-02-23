function getLight(){
    // Define light
    const ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 1);

    return light;
}