function getCar(){
    // instantiate a loader


    const mtlLoader = new THREE.MTLLoader();

    mtlLoader.load(
        // resource URL
        'Car/SportsCar.mtl',
        // called when resource is loaded
        function ( materials ) {
            materials.preload();

            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                // resource URL
                'Car/SportsCar.obj',
                // called when resource is loaded
                function ( object ) {
                    object.position.z = 5;
                    object.name = "sportcar";
                    console.log(object);
                    scene.add( object );

                },
                // called when loading is in progresses
                function ( xhr ) {

                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

                },
                // called when loading has errors
                function ( error ) {

                    console.log( 'An error happened' );

                }
            );
        },
        // called when loading is in progresses
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );


// load a resource

}