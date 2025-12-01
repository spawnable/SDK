try {
  process.env.clone = true; 
  require('up')(require('./build'))
} catch (err) {
  console.log(err)
const fs = require('fs')
const json = process.cwd()+'/package.json'
const play = process.cwd() + "/../../"

const pkg = JSON
  .parse(fs.readFileSync(json))

const dir = {
  robot: fs
  .readdirSync(play)
  .filter(str => str.includes('BOT'))[0],
  
  up: pkg.dependencies.up, 
  
  engine: fs
  .readdirSync(play)
  .filter(str => str.includes('RIG'))[0],
  
  on: pkg.dependencies.on
}

  let str = ''
  for (var key in dir) {
    str += `${key}: \n ${dir[key]}\n`
  }

  console.log("[x x]")
  console.log(str)
}
