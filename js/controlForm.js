const loader = new THREE.GLTFLoader();
import { addBasicGeometry } from './scenario.js'
import { buildMesh, meshes } from './geometryUtils.js'
import { loadModel, models } from './modelUtils.js'

/**
 * gets the values of the basic geometries form and the models form, then builds the mesh with the given values and finally adds them to the scene
 */
const getValuesBasicGeometry = () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let geometry = document.getElementById('geometryType').value
        let material = document.getElementById('textureType').value
        buildMesh(geometry, material)
        addBasicGeometry(meshes, models)
    }
    );

    document.getElementById('form_models').addEventListener('submit', (e) => {
        e.preventDefault();
        let model = document.getElementById('model').value
        loadModel(loader, model)
        addBasicGeometry(meshes, models)
    }
    );
}

export{
    getValuesBasicGeometry,
    buildMesh
}