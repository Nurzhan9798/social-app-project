const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const slice = process.argv[3];

const layers = ["pages", "features", "entities"]

if (!layer || !layers.includes(layer)) {
    throw new Error(`Specify layer ${layers.join(" or ")}`);
}

if (!slice) {
    throw new Error("Specify slice");
}

createTemplate(layer, slice);

