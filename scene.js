// Create scene
const scene = new THREE.Scene();
cameraLock = [2, 2]

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,     // fov - Camera frustum vertical field of view
    window.innerWidth / window.innerHeight, // aspect - Camera frustum aspect ratio
    0.1,   // near - Camera frustum near plane
    1000); // far - Camera frustum far plane
// Far clipping plane above will not work, because skybox is 5000x5000x5000. Try 2500

// Create renderer
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
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

const render = function () {
    requestAnimationFrame(render);

    animateCar();

    if (camera.position.y <= cameraLock[0]) {
        camera.position.y = cameraLock[0];
    } else if (camera.position.y >= cameraLock[1]) {
        camera.position.y = cameraLock[1];
    }

    updateMovement();

    renderer.render(scene, camera);

}

render();