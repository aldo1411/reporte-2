import { getXPosition, getYPosition } from './numUtils.js'

let meshes = []

/**
 * gets the geometry type given a string with the name of the geometry
 * @param {String} [geometry] the geometry name 
 * @returns {Object} a threejs geometry object
 */
const getGeometryType = (geometry) => {
    switch(geometry) {
        case 'cube':
            return new THREE.BoxGeometry()
        case 'sphere':
            return new THREE.SphereGeometry(.8, 20, 20)
        case 'cilynder':
            return new THREE.CylinderGeometry(.5, .5, 1, 20)
        case 'torus':
          return new THREE.TorusGeometry(.6, .3, 16, 100)
        default:
          break
    }
}

/**
 * gets the geometry material given a string with the name of the material
 * @param {String} [material] the name of the mateiral
 * @returns {Object} a threejs material object
 */
const getGeometryMaterial = (material) => {
    switch(material) {
        case 'basic':
            return new THREE.MeshBasicMaterial({color: 'rgb(66, 75, 84)'})
        case 'normal':
            return new THREE.MeshNormalMaterial()
        case 'lambert':
            return new THREE.MeshLambertMaterial({color: 'rgb(66, 75, 84)', transparent: true, opacity: 0.5})
        case 'standard':
          return new THREE.MeshStandardMaterial({metalness: 0, roughness: 0.5})
        default:
          break
    }
}

/**
 * builds the mesh given a geometry and a material and pushes it to the meshes array
 * @param {Object} [geometry] the geometry object
 * @param {Object} [material] the material object
 */
const buildMesh = (geometry, material) => {
    let mesh, geometryType, materialType
    geometryType = getGeometryType(geometry)
    materialType = getGeometryMaterial(material)
    mesh = new THREE.Mesh(geometryType, materialType)
    mesh.position.setX(getXPosition(-4, 4));  
    mesh.position.setY(getYPosition(-3, 3 ));
    meshes.push(mesh)
}

export{
    buildMesh,
    meshes
}