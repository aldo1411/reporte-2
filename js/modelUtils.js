import { getXPosition, getYPosition } from './numUtils.js'

let models = []

/**
 * loads model and then push the model into our models array
 * @param {Object} [loader] loader object in charge to load our model
 * @param {Object} [model] model that is going to be loaded
 */
const loadModel = (loader, model) => {
    let model3D = getModelRoute(model)
    let scale = getModelScale(model3D)

    loader.load(model3D, (glb) => {
        console.log(glb);
        let root = glb.scene
        root.scale.set(...scale)
        root.position.setX()
        root.position.setX(getXPosition(-4, 4));  
        root.position.setY(getYPosition(-3, 3 ));
        models.push(root)
    })
}

/**
 * Gets the route to our model given a value
 * @param {String} [model] model name that we are searching for
 * @returns {String} the path of our model
 */
const getModelRoute = (model) => {
    switch(model) {
        case 'bonnie':
            return 'assets/bonnie .glb'
        case 'foxy':
            return 'assets/foxy.glb'
        case 'freddy':
            return 'assets/toy_freddy.glb'
        case 'chica':
          return 'assets/chica .glb'
        default:
          break
    }
}

/**
 * Gets the scale of the model given the path of our model
 * @param {String} [modelPath] path of our model that we are scaling
 * @returns {Array} array with the scale in X, Y and Z axis of the model
 */
const getModelScale = (modelPath) => {
    switch(modelPath) {
        case 'assets/bonnie .glb':
            return [2,2,2]
        case 'assets/foxy.glb':
            return [2,2,2] 
        case 'assets/toy_freddy.glb':
            return [2.5,2.5,2.5] 
        case 'assets/chica .glb':
            return [2.5,2.5,2.5] 
        default:
          break
    }
}

export{
    loadModel,
    models
}