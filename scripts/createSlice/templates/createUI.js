const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storeTemplate = require('./storeTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot("src", layer, sliceName, 'ui', ...segments);
    const createUIDir = async () => {
        try {
            fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Failed to create UI directory');
        }
    }

    const createComponents = async () => {
        const componentName = firstCharUpperCase(sliceName);
        try {
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName)
            );
        } catch (e) {
            console.log('Failed to create ui component');
        }
        try {
            await fs.writeFile(
                resolveUIPath(componentName,`${componentName}.module.scss`),
                styleTemplate(componentName)
            );
        } catch (e) {
            console.log('Failed to create style component');
        }
        try {
            await fs.writeFile(
                resolveUIPath(componentName,`${componentName}.stories.tsx`),
                storeTemplate(layer, componentName)
            );
        } catch (e) {
            console.log('Failed to create storybook component');
        }
    }

    await createUIDir();
    await createComponents();
}
