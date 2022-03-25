/**
 * returns a random number as a position in the X axis
 * @param {Number} [min] the minimun number that the X axis is taking
 * @param {Number} [max] the max number that the X axis is taking
 * @returns {Number} random number between the minimun and max number requested
 */
const getXPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * returns a random number as a position in the Y axis
 * @param {Number} [min] the minimun number that the Y axis is taking
 * @param {Number} [max] the max number that the Y axis is taking
 * @returns {Number} random number between the minimun and max number requested
 */
const getYPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export {
    getXPosition,
    getYPosition
} 