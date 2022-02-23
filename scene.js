const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
   100,                     // fov (vertical)
   window.innerWidth /
      window.innerHeight,  // aspect ratio
   0.1,                    // near clipping plane
   1000);                  // far clipping plane

const renderer = new THREE.WebGLRenderer({
   antialias: true,
   alpha: true });
renderer.shadowMap.enabled = true;

// const light = new THREE.DirectionalLight(color, intensity);
// light.castShadow = true;
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const intensity = 2;
const light = new THREE.DirectionalLight(skyColor, intensity);
light.castShadow = false;

scene.add(light);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderPlane();
function renderPlane() {
    //set a plane for tree
    const mPlane = new THREE.MeshBasicMaterial({color: 'rgb(153, 255, 204)'});  
    const wPlane = 20;  // ui: width
    const hPlane = 10;  // ui: height
    const gPlane = new THREE.PlaneGeometry(
        wPlane, hPlane);

    const plane = new THREE.Mesh(gPlane, mPlane);
    plane.rotation.z = 0;
    plane.rotation.y = 0;
    plane.rotation.x = 5;

    scene.add(plane);
}

// Move camera from center
camera.position.x = 0; // move right from center of scene
camera.position.y = 0; // move up from center of scene
camera.position.z = 5; // move camera away from center of scene


//boom
// cylinder with a bol
//cylinder
// const radiusTop = 2;  // ui: radiusTop
// const radiusBottom = 2;  // ui: radiusBottom
// const height = 5;  // ui: height
// const radialSegments = 20;  // ui: radialSegments
// const geometry = new THREE.CylinderGeometry(
//     radiusTop, radiusBottom, height, radialSegments);
// const mTree = new THREE.MeshBasicMaterial({color: 'rgb(153, 102, 0)'});  
// const treeStam = new THREE.Mesh(geometry, mTree);
// treeStam.rotation.z = 0;
// // treeStam.rotation.x = 10;
// treeStam.rotation.y = 15;
// const geometry = new THREE.ConeGeometry( 2, 10, 32 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// const cone = new THREE.Mesh( geometry, material );
// scene.add( cone );

// const geometry = new THREE.CylinderGeometry( 2, 2, 5, 32, 1 );
// const material = new THREE.MeshBasicMaterial( {color: 'rgb(153, 102, 0)'} );
// const cylinder = new THREE.Mesh( geometry, material );
// scene.add( cylinder );
treeMesh();
function treeMesh() {
    var loader = new THREE.TextureLoader();
    
    for(var i = 0; i < 5; i++) {
        const randomPosition = Math.random()*20-5; 
        let log = new THREE.BoxGeometry(0.1,1,0.1);
        let logMat = new THREE.MeshBasicMaterial( {color: 'rgb(153, 102, 0)'})
        let logMesh = new THREE.Mesh(log, logMat);
        logMesh.position.y = 0.5;
        logMesh.position.x = randomPosition;
        // logMesh.position
        logMesh.castShadow = true;
        logMesh.receiveShadow = true;
        console.log("x=" , logMesh.position.x, "y position=", logMesh.position.y, );
        
        scene.add(logMesh);
    
        const radius = 0.3;  // ui: radius
        const widthSegments = 12;  // ui: widthSegments
        const heightSegments = 8;  // ui: heightSegments
        const sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    
        let sphereMaterial = new THREE.MeshBasicMaterial({color: 'rgb(0, 179, 89)'});
        const sphereMeshOne = new THREE.Mesh(sphere, sphereMaterial);
        const sphereMeshTwo = new THREE.Mesh(sphere, sphereMaterial);
        const sphereMeshTree = new THREE.Mesh(sphere, sphereMaterial);
        const sphereMeshFour = new THREE.Mesh(sphere, sphereMaterial);
    
        sphereMeshOne.position.y = 1.5;
        sphereMeshTwo.position.y = 1.5;
        sphereMeshTree.position.y = 1.8;
        sphereMeshFour.position.y = 1.2;
        sphereMeshOne.position.x = randomPosition - 0.2;
        // sphereMeshTwo.position.x = -0.15;
        sphereMeshTwo.position.x = randomPosition - 0.15;
        sphereMeshTree.position.x = randomPosition;
        sphereMeshFour.position.x = randomPosition; 
    
    
    
        scene.add(sphereMeshOne, sphereMeshTwo, sphereMeshTree,sphereMeshFour);
    }
}


// - a circle of radius 5 on top (1st parameter)
// - a circle of radius 5 on the bottom (2nd parameter)
// - a height of 20 (3rd parameter)
// - 32 segments around its circumference (4th parameter)
// var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
// //Yellow
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// var cylinder = new THREE.Mesh( geometry, material );
// scene.add( cylinder );
// treeStam.position.x =
// scene.add(treeStam);

renderer.render(scene, camera);

//sphere
// const radius = 7;  // ui: radius
// const widthSegments = 12;  // ui: widthSegments
// const heightSegments = 8;  // ui: heightSegments
// const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);