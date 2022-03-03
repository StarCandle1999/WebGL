// Create scene
const scene = new THREE.Scene();

cameraLock = [2,2]

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

getCabin();
getCar();
getBush();
skybox = getSkybox();
scene.add(skybox);

ambientLight = getAmbientLight();
scene.add(ambientLight);

light = getLight();
scene.add(light);

terrain = getTerrain();
scene.add(terrain);

createTrees(scene);

// Move camera from center
camera.position.x = 2;  // Move right from center of scene
camera.position.y = 3;  // Move up from center of scene
camera.position.z = 20;  // Move camera away from center of scene
// Import camera control and rotation library
const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
const fpsControls = new THREE.FirstPersonControls(camera, renderer.domElement);
fpsControls.movementSpeed = 0.5;
fpsControls.enabled = false;

var sportCarPosition10 = false;
const render = function() {
    requestAnimationFrame(render);

    var sportcar = scene.getObjectByName("sportcar");
    if (!sportCarPosition10) {
        if (sportcar.position.z <= 20 ) {
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

    if (camera.position.y <= cameraLock[0]){
        camera.position.y = cameraLock[0];
    }

    if (camera.position.y >= cameraLock[1]){
        camera.position.y = cameraLock[1];
    }

    if (orbitControls.enabled){
        orbitControls.update();
    }
    if (fpsControls.enabled){
        fpsControls.update(1);
    }
    renderer.render(scene, camera);
}

render();