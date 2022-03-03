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
    // for(var i = 0; i < 100; i++) {
        // randomizer positions
        // const randomPositionX = randomizePosition(seeds, "X");
        const randomPositionX = x;
        // const randomPositionZ = randomizePosition(seeds, "Z");
        const randomPositionZ = z;
        // console.log("x: ", randomPositionX, " y: ", randomPositionZ )
        // make log from tree
        let log = new THREE.BoxGeometry(3,30,3);
        const bast = textureLoader.load("bast.jpg");
        const displacement = loader.load("displacement2.jpg")

        const bastMaterial = new THREE.MeshStandardMaterial( {
            color: 'rgb(155,154,134))',
            side: THREE.DoubleSide,
            map: bast,
            displacementMap: displacement,
            displacementScale: 6
        } );

        let logMesh = new THREE.Mesh(log, bastMaterial);
        logMesh.position.y = 13;
        // if(seeds.Y.includes(logMesh.position.y)) {
        //     logMesh.position.y = 2;
        // } else {

        // }
        logMesh.position.x = randomPositionX;
        logMesh.position.z = randomPositionZ;
        logMesh.castShadow = true;
        logMesh.receiveShadow = true;
        scene.add(logMesh);
    
        // make spheres for tree
        const radius = 8;  // ui: radius
        const widthSegments = 40;  // ui: widthSegments
        const heightSegments = 34;  // ui: heightSegments
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
    
        sphereMeshOne.position.y = 35.5;
        sphereMeshTwo.position.y = 40.5;
        sphereMeshTree.position.y = 45;
        sphereMeshFour.position.y = 32;

        sphereMeshOne.position.z = randomPositionZ;
        sphereMeshTwo.position.z = randomPositionZ;
        sphereMeshTree.position.z = randomPositionZ;
        sphereMeshFour.position.z = randomPositionZ;

        sphereMeshOne.position.x = randomPositionX - 6;
        sphereMeshTwo.position.x = randomPositionX - (-6.5);
        sphereMeshTree.position.x = randomPositionX;
        sphereMeshFour.position.x = randomPositionX;     
    
        scene.add(sphereMeshOne, sphereMeshTwo, sphereMeshTree,sphereMeshFour);
    // }
}

function createTrees(scene) {
    treeMesh(scene, 10, 10);
    treeMesh(scene, 40, 40);
}

// function randomizePosition(seeds, target) {
//     const treeNumberArray = [-200, 200];
//     const position = Math.floor(Math.random()*treeNumberArray[Math.floor(Math.random()*treeNumberArray.length)]);
//     if (seeds[target].includes(position)) {
//         console.log(position);
//         randomizePosition(seeds, target);
//     } else {
//         return position;
//     }
// }