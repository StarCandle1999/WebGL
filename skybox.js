function getSkybox(){

    const directions  = ["Assets/clouds/pos-x.bmp", "Assets/clouds/neg-x.bmp", "Assets/clouds/pos-y.bmp", "Assets/clouds/neg-y.bmp", "Assets/clouds/pos-z.bmp", "Assets/clouds/neg-z.bmp"];
    const materialArray = [];
    for (let i = 0; i < 6; i++)
    {
        materialArray.push(
            new THREE.MeshBasicMaterial({
                map: textureLoader.load(directions[i]),
                side: THREE.BackSide})
        );
    }

    const skyGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
    const skyBox = new THREE.Mesh(skyGeometry, materialArray);

    return skyBox;
}