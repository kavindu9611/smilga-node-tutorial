const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
//Behind the scenes server - emits the request event
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  console.log('Event emitter ')  
  res.end('Welcome')
})

server.listen(5000)