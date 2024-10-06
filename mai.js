import * as THREE from 'three';  
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
 const backgrounds = new THREE.TextureLoader().load('8k_stars_milky_way.jpg'); 
 scene.background = backgrounds;  const renderer = new THREE.WebGLRenderer(); 
 renderer.setSize( window.innerWidth, window.innerHeight ); 
 renderer.setAnimationLoop( animate ); 
 document.body.appendChild( renderer.domElement ); 
  const geometry1 = new THREE.SphereGeometry( 5,32,16 ); 
  const texture_sun = new THREE.TextureLoader().load('8k_sun.jpg'); 
  const material1 = new THREE.MeshBasicMaterial( { map : texture_sun } ); 
  const sun = new THREE.Mesh( geometry1, material1 ); scene.add( sun );
    camera.position.z = 50;  const geometry2 = new THREE.SphereGeometry( 4,23,12 ); 
    const texture_earth = new THREE.TextureLoader().load('8k_earth_daymap.jpg'); 
    const material2 = new THREE.MeshBasicMaterial( { map : texture_earth } ); 
    const earth = new THREE.Mesh( geometry2, material2 );  scene.add( earth );  
    const geometry3 = new THREE.SphereGeometry( 3,17,10 );
     const texture_moon = new THREE.TextureLoader().load('8k_moon.jpg'); 
     const material3 = new THREE.MeshBasicMaterial( { map : texture_moon } ); 
     const moon = new THREE.Mesh( geometry2, material3 );  scene.add(moon); 
      sun.position.x -= 5; sun.position.z += 20; 
      earth.position.z += 20;  var earth_angle = 0; 
      var moon_angle = 0; 
       function animate() {  
         sun.rotation.y += 0.01; 
         earth.rotation.y +=0.05;
          moon.rotation.y += 0.03; 
            earth.position.x = sun.position.x + 20*Math.cos(earth_angle); 
            earth.position.z = sun.position.z - 20*Math.sin(earth_angle); 
              moon.position.x = earth.position.x + 10*Math.cos(moon_angle); 
              
              moon.position.z = earth.position.z - 10*Math.sin(moon_angle); 
                moon_angle += 0.09; earth_angle += 0.01;    
                 renderer.render( scene, camera );  }
   animate();