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

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//set a plane for tree
const mPlane = new THREE.MeshBasicMaterial({color: 'rgb(153, 255, 204)'});  
const wPlane = 20;  // ui: width
const hPlane = 10;  // ui: height
const gPlane = new THREE.PlaneGeometry(
    wPlane, hPlane);

const plane = new THREE.Mesh(gPlane, mPlane);
plane.rotation.z = 6;
plane.rotation.x = 5;

scene.add(plane);
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

const geometry = new THREE.CylinderGeometry( 2, 2, 5, 32 );
const material = new THREE.MeshBasicMaterial( {color: 'rgb(153, 102, 0)'} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
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