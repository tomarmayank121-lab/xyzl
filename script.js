// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Position
camera.position.z = 5;

// Geometry
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffff,
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animation
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  torus.rotation.x += mouseY * 0.05;
  torus.rotation.y += mouseX * 0.05;

  renderer.render(scene, camera);
}
animate();

// Typing Effect
const text = "AI Engineer | Web Developer | Data Analyst";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Resize Fix
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});