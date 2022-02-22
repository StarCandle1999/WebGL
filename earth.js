function getEarth(){

// Create geometry
    const geometry = new THREE.SphereGeometry(1, 32, 24);

// Define material
    const normalMap = textureLoader.load("earth_normal.jpg");
    const colorMap = textureLoader.load("earth.jpg");
    const material  = new THREE.MeshPhongMaterial({ map: colorMap, normalMap: normalMap });

// Create mesh
    const earth = new THREE.Mesh(geometry, material);
    earth.position.set(0,5,0);
    return earth;
}