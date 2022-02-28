function Box(){
    const width = 8;  // ui: width
    const height = 8;  // ui: height
    const depth = 8;  // ui: depth
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshNormalMaterial();
    
    const box = new THREE.Mesh(geometry, material);
    return box;
}

function treeMesh(scene, seeds) {
    console.log(seeds);
    var loader = new THREE.TextureLoader();
    for(var i = 0; i < 100; i++) {
        // randomizer positions
        const randomPositionX = randomizePosition(seeds, "X");
        const randomPositionZ = randomizePosition(seeds, "Z");

        // make log from tree
        let log = new THREE.BoxGeometry(0.1,1,0.1);
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
        logMesh.position.y = 0.5;
        if(seeds.Y.includes(logMesh.position.y)) {
            logMesh.position.y = 0.5;
        } else {

        }
        logMesh.position.x = randomPositionX;
        logMesh.position.z = randomPositionZ;
        logMesh.castShadow = true;
        logMesh.receiveShadow = true;
        scene.add(logMesh);
    
        // make spheres for tree
        const radius = 0.3;  // ui: radius
        const widthSegments = 12;  // ui: widthSegments
        const heightSegments = 8;  // ui: heightSegments
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
    
        sphereMeshOne.position.y = 1.5;
        sphereMeshTwo.position.y = 1.5;
        sphereMeshTree.position.y = 1.8;
        sphereMeshFour.position.y = 1.2;

        sphereMeshOne.position.z = randomPositionZ;
        sphereMeshTwo.position.z = randomPositionZ;
        sphereMeshTree.position.z = randomPositionZ;
        sphereMeshFour.position.z = randomPositionZ;

        sphereMeshOne.position.x = randomPositionX - 0.2;
        sphereMeshTwo.position.x = randomPositionX - (-0.15);
        sphereMeshTree.position.x = randomPositionX;
        sphereMeshFour.position.x = randomPositionX;     
    
        scene.add(sphereMeshOne, sphereMeshTwo, sphereMeshTree,sphereMeshFour);
    }
}

function randomizePosition(seeds, target) {
    const treeNumberArray = [-20, 20];
    const position = Math.floor(Math.random()*treeNumberArray[Math.floor(Math.random()*treeNumberArray.length)]);
    console.log(seeds[target]);
    if (seeds[target].includes(position)) {
        console.log(position);
        randomizePosition(seeds, target);
    } else {
        return position;
    }
}