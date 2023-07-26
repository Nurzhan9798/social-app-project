const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createUI = require('./createUI');
const createModel = require('./createModel');
const createPublicApi = require('./createPublicApi');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, slice) => {
    try {
        const sliceName = firstCharUpperCase(slice);
        await fs.mkdir(resolveRoot("src", layer, sliceName));
    } catch (e) {
        console.log(`Failed to create slice directory${slice}`);
    }

    await createModel(layer, slice);
    await createUI(layer, slice);
    await createPublicApi(layer, slice);
}
