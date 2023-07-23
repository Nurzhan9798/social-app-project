const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createUI = require('./createUI');
const createModel = require('./createModel');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, slice) => {
    try {
        await fs.mkdir(resolveRoot("src", layer, slice));
    } catch (e) {
        console.log(`Failed to create slice directory${sliceName}`);
    }

    await createModel(layer, slice);
    await createUI(layer, slice);
    await createPublicApi(layer, slice);
}
