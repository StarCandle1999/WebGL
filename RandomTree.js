function Box(){
    const width = 8;  // ui: width
    const height = 8;  // ui: height
    const depth = 8;  // ui: depth
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshNormalMaterial();
    
    const box = new THREE.Mesh(geometry, material);
    return box;
}

function treeMesh(scene, x, z) {
    let loader = new THREE.TextureLoader();
    const randomPositionX = x;
    const randomPositionZ = z;
    // make log from tree
    const bast = textureLoader.load("images/bast.jpg");
    const displacement = loader.load("displacement2.jpg")

    const log = new THREE.CylinderGeometry( 0.5, 0.5, 10, 32 );
    const bastMaterial = new THREE.MeshStandardMaterial( {
        color: 'rgb(155,154,134))',
        side: THREE.DoubleSide,
        map: bast,
        displacementMap: displacement,
        displacementScale: 6
    } );

    let logMesh = new THREE.Mesh(log, bastMaterial);
    logMesh.position.y = 2;
    logMesh.position.x = randomPositionX;
    logMesh.position.z = randomPositionZ;
    logMesh.castShadow = true;
    logMesh.receiveShadow = true;
    scene.add(logMesh);

    // make spheres for tree
    const radius = 1.5;  // ui: radius
    const widthSegments = 5;  // ui: widthSegments
    const heightSegments = 5;  // ui: heightSegments
    const sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const leaf = textureLoader.load("images/leaf.jpg");
    const sphereMaterial = new THREE.MeshStandardMaterial( {
        color: 'rgb(95, 184, 18)',
        side: THREE.DoubleSide,
        map: leaf,
        displacementMap: displacement,
        displacementScale: 6
    } );

    const sphereMeshOne = new THREE.Mesh(sphere, sphereMaterial);
    const sphereMeshTwo = new THREE.Mesh(sphere, sphereMaterial);
    const sphereMeshTree = new THREE.Mesh(sphere, sphereMaterial);
    const sphereMeshFour = new THREE.Mesh(sphere, sphereMaterial);

    sphereMeshOne.position.y = 6.5;
    sphereMeshTwo.position.y = 6.5;
    sphereMeshTree.position.y = 5;
    sphereMeshFour.position.y = 8;

    sphereMeshOne.position.z = randomPositionZ;
    sphereMeshTwo.position.z = randomPositionZ;
    sphereMeshTree.position.z = randomPositionZ;
    sphereMeshFour.position.z = randomPositionZ;

    sphereMeshOne.position.x = randomPositionX - 1.2;
    sphereMeshTwo.position.x = randomPositionX - (-1.2);
    sphereMeshTree.position.x = randomPositionX;
    sphereMeshFour.position.x = randomPositionX;     

    scene.add(sphereMeshOne, sphereMeshTwo, sphereMeshTree,sphereMeshFour);
}

function createTrees(scene) {
    // back of te house
    treeMesh(scene, 20, -25);
    treeMesh(scene, 15, -20);
    treeMesh(scene, 10, -18);
    treeMesh(scene, 5, -22);
    treeMesh(scene, -5, -25);
    treeMesh(scene, -0, -20);
    treeMesh(scene, -8, -20);
    treeMesh(scene, -13, -20);

    //back of the playground and left of it
    treeMesh(scene, -20, -25);
    treeMesh(scene, -30, -15);
    treeMesh(scene, -25, -15);
    treeMesh(scene, -28, -10);
    
    // right of the house
    treeMesh(scene, 20, -10);
    treeMesh(scene, 15, -12);
    treeMesh(scene, 14, -6);
    treeMesh(scene, 15, 0);
    treeMesh(scene, 12, 5);
    treeMesh(scene, 10, 2);

    //around the house
    treeMesh(scene, 6, -2);
    treeMesh(scene, 8, -4);
    treeMesh(scene, 8, -6);
    treeMesh(scene, 7, -4);
    treeMesh(scene, 7, -8);
    treeMesh(scene, 7.5, -10);
    treeMesh(scene, 5, -14);
    treeMesh(scene, 2, -14);
    treeMesh(scene, 0, -15);
    treeMesh(scene, -5, -15);
    treeMesh(scene, -4, -12);
    treeMesh(scene, -8, -9);
    treeMesh(scene, -6, -6);
    treeMesh(scene, -10, -8);

    //left of the house
    treeMesh(scene, -10, -15);
    treeMesh(scene, -15, -15);
    treeMesh(scene, -18, -10);
    treeMesh(scene, -18, -5);
    treeMesh(scene, -20, 5);
    treeMesh(scene, -17, 8);
    treeMesh(scene, -10, 5);
    treeMesh(scene, -20, -5);
    treeMesh(scene, -18, -2);
    treeMesh(scene, -25, 0);
    treeMesh(scene, -23, 5);
    treeMesh(scene, -14, -6);

    // treeMesh(scene, -7, -4);
}