// test glbt files
var loader = new THREE.GLTFLoader();
loader.load("GLTF/playgroundTwo/scene.gltf", function(gltf) {
	gltf.scene.scale.set( 0.1, 0.1, 0.1);			   
	gltf.scene.position.x = -75;				    //Position (x = right+ left-) 
    gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	scene.add( gltf.scene );
	console.log(gltf);
});

loader.load("GLTF/seesaw/scene.gltf", function(gltf) {
	gltf.scene.scale.set( 1, 1, 1);			   
	gltf.scene.position.x = -75;				    //Position (x = right+ left-) 
    gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	scene.add( gltf.scene );
	console.log(gltf);
})

