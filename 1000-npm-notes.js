//npm - global command,comes with node
//npm --version

//local dependency -use it only in this particular project
//npm i <packagename>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packagename> (mac)

//package.json - manifest file(stores important info about project/package)
//manual approach(create package.json in the root,create properties etc)
//npm init
//npm init -y(everything default)


//PACKAGE-LOCK.JSON
    //Contain versions for all the packages not only for dependencies.


//1.Install lodash npm dependency

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
