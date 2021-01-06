let camera, scene, renderer;
let mesh;

init();
animate();
function init() {

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.z = 500;

  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x2a3b4c)
  // scene.fog = new THREE.Fog(0x76456c, 0.1, 8)
  // const loader = new THREE.TextureLoader().load('../bg.jpg', (texture) => {
  //   scene.background = texture
  // })

  const texture = new THREE.TextureLoader().load('loli.jpg');

  const geometry = new THREE.BoxBufferGeometry(200, 200, 200);
  // const material = new THREE.MeshBasicMaterial({ map: texture });
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);









  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //

  window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
function animate() {

  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);

}