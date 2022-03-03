function getBush(){
    const leaf = textureLoader.load("images/leaf.jpg");
    const leafMaterial = new THREE.MeshStandardMaterial( {
        color: 'rgb(95, 184, 18)',
        map: leaf,
        transparent: true,
        opacity: 0.8
    } );

    const geometry = new THREE.ConeGeometry( 1, 3, 10 );
    const cone = new THREE.Mesh( geometry, leafMaterial );

    cone.position.set(-4, 1, 10)
    scene.add( cone );
}