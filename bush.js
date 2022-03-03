function getBush(){
    const leaf = textureLoader.load("leaf.jpg");
    const leafMaterial = new THREE.MeshStandardMaterial( {
        color: 'rgb(95, 184, 18)',
        map: leaf
    } );

    const geometry = new THREE.ConeGeometry( 1, 3, 10 );
    const cone = new THREE.Mesh( geometry, leafMaterial );

    cone.position.set(0, 1, 10)
    scene.add( cone );
}