var fs = require('fs')

document.body.innerHTML = '<pre>' + (
  fs.readFileSync(__dirname + '/package.json', 'utf8')
) + '</pre>'
