const chalk = require('chalk')

const terminalPrint = {
  plain: (message) => {
    console.log(
      chalk.white(message)
    )
  },
  log: (message, ref = 'Log') => {
    console.log(
      chalk.yellow(`[${ref}]`), 
      chalk.white(message)
    )
  },
  error: (message, ref = 'Error!') => {
    console.log(
      chalk.red(`[${ref}]`), 
      chalk.red(message)
    )
  },
  success: (message, ref = 'Success!') => {
    console.log(
      chalk.green(`[${ref}]`), 
      chalk.green(message)
    )
  }
}

module.exports = terminalPrint