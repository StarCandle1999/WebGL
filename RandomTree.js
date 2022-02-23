function treeMesh(scene) {
    var loader = new THREE.TextureLoader();
    const treeNumberArray = [-100, 100];
    for(var i = 0; i < 1000; i++) {
        var treeNumber = treeNumberArray[Math.floor(Math.random()*treeNumberArray.length)];

        const randomPositionX = Math.floor(Math.random()*treeNumber);
        const randomPositionZ = Math.floor(Math.random()*treeNumber);
        let log = new THREE.BoxGeometry(0.1,1,0.1);

        let logMat = new THREE.MeshBasicMaterial( {color: 'rgb(153, 102, 0)'})
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
        logMesh.position.x = randomPositionX;

        logMesh.position.z = randomPositionZ;
        // logMesh.position
        logMesh.castShadow = true;
        logMesh.receiveShadow = true;
        console.log("x=" , logMesh.position.x, "y position=", logMesh.position.y, logMesh.position.z);
        
        scene.add(logMesh);
    
        const radius = 0.3;  // ui: radius
        const widthSegments = 12;  // ui: widthSegments
        const heightSegments = 8;  // ui: heightSegments
        const sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    
        // let sphereMaterial = new THREE.MeshBasicMaterial({color: 'rgb(0, 179, 89)'});

        const leaf = textureLoader.load("leaf.jpg");
        const sphereMaterial = new THREE.MeshStandardMaterial( {
            color: 'rgb(95, 184, 18)',
            side: THREE.DoubleSide,
            map: leaf,
            displacementMap: displacement,
            displacementScale: 6
        } );

        // const colorMap = textureLoader.load("earth.jpg");


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
        // sphereMeshTwo.position.x = -0.15;
        sphereMeshTwo.position.x = randomPositionX - (-0.15);
        sphereMeshTree.position.x = randomPositionX;
        sphereMeshFour.position.x = randomPositionX; 
    
    
    
        scene.add(sphereMeshOne, sphereMeshTwo, sphereMeshTree,sphereMeshFour);
    }
}