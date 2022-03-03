function getTerrain() {
    const loader = new THREE.TextureLoader();
    const grass = loader.load("images/grass.jpg", function (grass) {
        grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
        grass.offset.set(0, 0);
        grass.repeat.set(250, 250);
    });
    
    const geometry = new THREE.PlaneGeometry( 2500, 2500 );
    const material = new THREE.MeshStandardMaterial( {
        color: 'rgb(95, 184, 18)',
        side: THREE.DoubleSide,
        map: grass,
    } );
    const plane = new THREE.Mesh( geometry, material );
    //rotation is done in radians so used conversion from degrees to radian for ease of use
    plane.rotateX(Math.PI / 180 * 90);

    return plane;
}