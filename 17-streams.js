const {createReadStream} = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })


const stream = createReadStream('./content/big.txt',{highWaterMark:100000})
//const stream = createReadStream('./content/big.txt',{highWaterMark:100000,encoding: 'utf8' })

stream.on('data',(result)=>{
  console.log('This call back runs each and everytime when chunk of data is coming')
  console.log(result)
})

stream.on('error',(err)=>{console.log(err)})