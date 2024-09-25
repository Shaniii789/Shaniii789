const fs = require('fs')
const chalk = require('chalk')

global.devNumber = ['923193844528'] //Pake nomor mu
global.name = 'Shani' //Isi nama mu
global.namebot = 'Shani Botz' //Isi nama Bot mu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
