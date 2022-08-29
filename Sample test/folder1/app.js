console.log('I am in app.js file')
//const {folderName, fileName} = require ('./folder2/server')
const {name} = require('../index')

console.log('name', name)


module.exports = {
    folderName: 'folder1',
    fileName : 'app.js'
}

