// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,     // fov - Camera frustum vertical field of view
    window.innerWidth / window.innerHeight, // aspect - Camera frustum aspect ratio
    0.1,   // near - Camera frustum near plane
    1000); // far - Camera frustum far plane
// Far clipping plane above will not work, because skybox is 5000x5000x5000. Try 2500

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();


earth = getEarth();
scene.add(earth);

skybox = getSkybox();
scene.add(skybox);

ambientLight = getAmbientLight();
scene.add(ambientLight);

light = getLight();
scene.add(light);

terrain = getTerrain();
scene.add(terrain);

boxie = Box();
// scene.add(boxie);
var box = new THREE.Box3().setFromObject(boxie );
console.log(boxie.matrix)
// var position = new THREE.Vector3();
// position.setFromMatrixPosition(position );
//x,y,z
const seeds = [[boxie.position.x, boxie.position.y, boxie.position.z, box.getSize()]];
const seeds2 = {"X" : [], "Y" : [0.5], "Z" : []};
//treeMesh(scene, seeds2);

// Move camera from center
camera.position.x = 2;  // Move right from center of scene
camera.position.y = 3;  // Move up from center of scene
camera.position.z = 10;  // Move camera away from center of scene

// Import camera control and rotation library
const controls = new THREE.OrbitControls(camera, renderer.domElement);



// test glbt files
var loader = new THREE.GLTFLoader();
loader.load("mcdonalds/scene.gltf", function(gltf) {
	gltf.scene.scale.set( 0.1, 0.1, 0.1);			   
	gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
    gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	scene.add( gltf.scene );
	console.log(gltf);
});

// const controls = new THREE.FirstPersonControls(camera);

const render = function() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
}

render();