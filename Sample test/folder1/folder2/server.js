console.log('I am in server.js file')
const {folderName, fileName} = require ('./session')

const {} = require('../../index')

console.log('folderName', folderName, 'fileName', fileName)
module.exports = {
    folderName: 'folder2',
    fileName : 'server.js'
}

