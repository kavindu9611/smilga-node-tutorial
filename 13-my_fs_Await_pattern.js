const {readFile,writeFile} = require('fs').promises;
//const util = require('util')

//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

 
const start = async()=>{

  
  try{
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/AwaitPattern.txt',
                     `THIS IS HOW PROMISIFY FS MODULE : ${first} and ${second}`,
                    {flag:'a'}
    )   
    console.log(first,second)



    //const first = await readFilePromise('./content/first.txt','utf8')
   // const second = await readFilePromise('./content/second.txt','utf8')
   // await writeFilePromise('./content/AwaitPattern.txt',
    //                        `THIS IS HOW PROMISIFY FS MODULE : ${first} and ${second}`)
   // console.log(first,second)
  }
  catch(error){
    console.log(error)
  }
}

start()