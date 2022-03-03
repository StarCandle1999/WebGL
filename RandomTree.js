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
    var loader = new THREE.TextureLoader();
    const randomPositionX = x;
    const randomPositionZ = z;
    // make log from tree
    const bast = textureLoader.load("bast.jpg");
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

    const leaf = textureLoader.load("leaf.jpg");
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
    treeMesh(scene, 6, -2);
    treeMesh(scene, 8, -4);
    treeMesh(scene, 8, -6);
    treeMesh(scene, 7, -4);
    treeMesh(scene, 7, -8);
    treeMesh(scene, 7.5, -10);
    treeMesh(scene, 5, -14);
    treeMesh(scene, 2, -14);
    treeMesh(scene, 0, -15);
}