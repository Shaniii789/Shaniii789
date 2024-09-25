const fs = require('fs')
const chalk = require('chalk')

global.devNumber = ['923042812340'] //Pake nomor mu
global.name = 'PAEDULZ' //Isi nama mu
global.namebot = 'Paedulz Botz' //Isi nama Bot mu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})