import { createScene } from './scenario.js'
import { getValuesBasicGeometry } from './controlForm.js'

/**
 * creates the scene and renders all the basic geometries and models
 */
const main = () =>{
    createScene()
    getValuesBasicGeometry()
}

main()


