const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
const light = new THREE.DirectionalLight(0xffffff, 1)

/**
 * sets up the scene where we are rendering our objects
 */
const createScene = () => {
    light.position.set(2,2,5)
    scene.add(light)
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.z = 5;
}

/**
 * Adds rotation atribute on x axis and y axis to a given geometry
 * @param {object} [geometry] geometry that is going to be added the rotation
 */
const rotateGeometry = (geometry) => {
    geometry.rotation.x += 0.01;
    geometry.rotation.y += 0.01;
}

/**
 * Adds rotation atributte on y axis to a given model
 * @param {objet} [model] model that is going to be added the rotation
 */
const rotateModel = (model) => {
    model.rotation.y += 0.01;
}

/**
 * Adds all of our geometries and models to the scene and renders them
 * @param {Array} [geometries] array of geometries that contains all of our basic geometries
 * @param {Array} [models] array of models that contains all of our models
 */
const addBasicGeometry = (geometries, models) => {
    models.forEach(model => {
        scene.add(model);
    
        const render = () =>  {
            requestAnimationFrame( render )
            rotateModel(model)
            renderer.render( scene, camera )
        };
        
        render();
    });
    geometries.forEach(geometry => {
        scene.add( geometry );
    
        const render = () =>  {
            requestAnimationFrame( render )
            rotateGeometry(geometry)
            renderer.render( scene, camera )
        };
        
        render();
    });

}

export {
    createScene,
    addBasicGeometry
}