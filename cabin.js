function getCabin(){
    const loader = new THREE.GLTFLoader();
    loader.load( 'cabin/cabin.glb', function ( glb ) {

        scene.add(glb.scene);

    }, undefined, function ( error ) {

        console.error( error );

    } );


}
