import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera)



const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

const AmbientLight = new THREE.AmbientLight(0xaaaaaa);
AmbientLight.position.set(5, 4, 4);


const pointLight = new THREE.PointLight(0x0000ff);
pointLight.position.set(-10, 4, 4);

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);


scene.add(AmbientLight)
scene.add(pointLight)

function animate() {
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.0;
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate()