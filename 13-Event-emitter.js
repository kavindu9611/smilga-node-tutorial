// on- Listen for an event
//emit -emit an event
//'response' - Name of the event
//EventEmitter is a class

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events')

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,age)=>{
  console.log(`Data received with user ${name} and ${age}`)
})

customEmitter.on('response', ()=>{
  console.log(`some other logic`)
})

customEmitter.emit('response','kavindu',26)