const fs = require('fs');
const path = require('path');
const { promptUserWithArrowKeys, listFiles, promptUser } = require('../promptsHelper');
const getValidatorTemplate = require('./template'); // Import the function to get fragment content


async function onHandleFormValidation() {
    const useTypeScript = await promptUser('Are you using TypeScript? (y/n): ', 'y') === 'y';
    const fileExtension = useTypeScript ? 'ts' : 'js';
    const otherExtension = useTypeScript ? 'js' : 'ts';

    //Mohammad Sohail: You can un comment and see the paths
    // console.log('Route Directory Path :)', path.resolve(__dirname, '../../..')) // development
    // const basePath = path.resolve(__dirname, '../../../..'); // development
    const basePath = path.resolve(__dirname, '../../..'); // production
}

module.exports = {
    onHandleFormValidation
};
