// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHii = require('./05-utils')
const data = require('./06-alternative-favour')
require('./07-mind-grenade')
sayHii('susan')
sayHii(names.john)
sayHii(names.peter)



