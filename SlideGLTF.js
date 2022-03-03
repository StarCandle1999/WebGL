var loader = new THREE.GLTFLoader();
loader.load("GLTF/playgroundTwo/scene.gltf", function(playground) {
	playground.scene.scale.set( 0.015, 0.015, 0.015);			   
	playground.scene.position.x = -15;				    //Position (x = right+ left-) 
	playground.scene.position.y = 0;				    //Position (y = up+, down-)
	playground.scene.position.z = 0;				    //Position (z = front +, back-)
	scene.add( playground.scene );
	console.log(playground);
	init()
});