const fs = require('fs')
const terminalPrint = require('./terminalPrint')
const jsTemplate = require('../templates/javascript')
const scssTemplate = require('../templates/scss')

const createJs = async (ComponentName, ext = 'js') => {
  try {
    terminalPrint.log(`Creando ${ComponentName}.${ext}`)
    await fs.appendFileSync(`./${ComponentName}/${ComponentName}.${ext}`, jsTemplate(ComponentName));
    terminalPrint.success(`Creado ${ComponentName}.${ext}`)
  } catch(error) {
    terminalPrint.error(error)
    process.exit()
  }
}

const createScss = async (ComponentName, ext = 'scss') => {
  try {
    terminalPrint.log(`Creando ${ComponentName}.${ext}`)
    await fs.appendFileSync(`./${ComponentName}/${ComponentName}.${ext}`, scssTemplate(ComponentName));
    terminalPrint.success(`Creado ${ComponentName}.${ext}`)
  } catch(error) {
    terminalPrint.error(error)
    process.exit()
  }
}

module.exports = {
  createJs,
  createScss
} 