// test glbt files
var loader = new THREE.GLTFLoader();
loader.load("GLTF/playgroundTwo/scene.gltf", function(gltf) {
	gltf.scene.scale.set( 0.015, 0.015, 0.015);			   
	gltf.scene.position.x = -15;				    //Position (x = right+ left-) 
    gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	scene.add( gltf.scene );
	console.log(gltf);
});

// loader.load("GLTF/swing/scene.gltf", function(gltf) {
// 	gltf.scene.scale.set( 0.02, 0.02, 0.02);			   
// 	gltf.scene.position.x = -15;				    //Position (x = right+ left-) 
//     gltf.scene.position.y = 0;				    //Position (y = up+, down-)
// 	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
// 	scene.add( gltf.scene );
// 	console.log(gltf);
// })

