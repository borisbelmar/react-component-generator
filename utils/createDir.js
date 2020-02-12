const terminalPrint = require('./terminalPrint')
const fs = require('fs')

const createDir = async ComponentName => {
  const dir = `./${ComponentName}`;
  if(!fs.existsSync(dir)) { 
    terminalPrint.log(`Creando directorio: ${ComponentName}/`)
    await fs.mkdirSync(dir, { recursive: true }) 
    terminalPrint.success(`Creado directorio: ${ComponentName}/`)
  } else {
    terminalPrint.error('El componente ya existe')
    process.exit()
  }
}

module.exports = createDir