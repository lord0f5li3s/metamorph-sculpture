import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load('https://www.dropbox.com/scl/fi/cz3rm5u75q901nqlk41e4/metamorph.glb?rlkey=5go3p0domvzhncwjtdw6vme9u&raw=1', function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, -1, 0);  // Adjust model position if needed
}, undefined, function (error) {
    console.error('Error loading the model:', error);
});

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
