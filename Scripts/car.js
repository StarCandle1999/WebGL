var sportCarPosition10 = false;

function getCar() {
    // instantiate a loader
    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.load(
        // resource URL
        'Assets/Car/SportsCar.mtl',
        // called when resource is loaded
        function (materials) {
            materials.preload();
            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                // resource URL
                'Assets/Car/SportsCar.obj',
                // called when resource is loaded
                function (object) {
                    object.position.z = 5;
                    object.name = "sportcar";
<<<<<<< Updated upstream:Scripts/car.js
                    scene.add(object);

                },
                // called when loading is in progresses
                function (xhr) {

                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                },
                // called when loading has errors
                function (error) {

                    console.log('An error happened', error);

=======
                    scene.add( object );
                },
                // called when loading is in progresses
                function ( xhr ) {
                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                },
                // called when loading has errors
                function ( error ) {
                    console.log( 'An error happened', error );
>>>>>>> Stashed changes:car.js
                }
            );
        },
    );
}

<<<<<<< Updated upstream:Scripts/car.js
function animateCar() {
    if (scene.getObjectByName("sportcar")) {
=======
function animateCar(){
    //check if object is renderd
    if (scene.getObjectByName("sportcar")){
>>>>>>> Stashed changes:car.js
        var sportcar = scene.getObjectByName("sportcar");
        if (!sportCarPosition10) {
            if (sportcar.position.z <= 20) {
                sportcar.position.z += 0.1;
            } else {
                sportCarPosition10 = true;
            }
        } else {
            if (sportcar.position.z >= 5) {
                sportcar.position.z -= 0.1;
            } else {
                sportCarPosition10 = false;
            }
        }
    }
}