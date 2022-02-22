// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,     // fov - Camera frustum vertical field of view
    window.innerWidth / window.innerHeight, // aspect - Camera frustum aspect ratio
    0.1,   // near - Camera frustum near plane
    2500); // far - Camera frustum far plane
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

// Move camera from center
camera.position.x = 2;  // Move right from center of scene
camera.position.y = 3;  // Move up from center of scene
camera.position.z = 10;  // Move camera away from center of scene

// Import camera control and rotation library
const controls = new THREE.OrbitControls(camera, renderer.domElement);


// const controls = new THREE.FirstPersonControls(camera);

const render = function() {
    requestAnimationFrame(render);

    controls.update();
    renderer.render(scene, camera);
}

render();
