function getSkybox(){

    const directions  = ["clouds/pos-x.bmp", "clouds/neg-x.bmp", "clouds/pos-y.bmp", "clouds/neg-y.bmp", "clouds/pos-z.bmp", "clouds/neg-z.bmp"];
    const materialArray = [];
    for (let i = 0; i < 6; i++)
    {
        materialArray.push(
            new THREE.MeshBasicMaterial({
                map: textureLoader.load(directions[i]),
                side: THREE.BackSide})
        );
    }

    const skyGeometry = new THREE.BoxGeometry(2500, 2500, 2500);
    const skyBox = new THREE.Mesh(skyGeometry, materialArray);

    return skyBox;
}