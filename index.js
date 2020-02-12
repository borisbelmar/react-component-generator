#!/usr/bin/env node
const commander = require('commander')
const terminalPrint = require('./utils/terminalPrint')
const createDir = require('./utils/createDir')
const { createJs, createScss } = require('./utils/createFiles')

terminalPrint.plain('--------------------------------');
terminalPrint.plain('React component builder 1.0');
terminalPrint.plain('--------------------------------');

commander
.arguments('<Component>')
.action(async Component => {
  terminalPrint.log(`Creando el componente: ${Component}`, 'Building')
  await createDir(Component)
  await createJs(Component)
  await createScss(Component)
  terminalPrint.success(`Componente ${Component} listo!`, 'Terminado! :D')
})
.parse(process.argv);

