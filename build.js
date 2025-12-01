const start = {
  // write domain.com
  name: "saturdaystuff.com",
  // paste #.#.#.# 
  host: '159.65.142.71', 
  // apply environment
  mode: "test",
  // connect to robot
  plug: false, 
  
test: {
  // cache state file
  file: "0000.json",
  // caching interval seconds
  push: 180,
  // component name length
  code: 0,
  // token bucket size
  size: 100000000,
  // replenish token seconds
  fill: 2,
  // receive byte limit (1GB)
  byte: 100000000000,
  // server sleep seconds
  wake: 10,
  
  test: 0,
  // symmetric encryption key
  hash:'VzmMkUYYC5179hlcSxMVVexuhW0iW12m',
  // nabla delta handshake
  bond:"VzmMkUYYC5179hlcSxMVVexuhW0iW12m",
  
  ipstack: "dabe3a28947dab89660ee5e461bc38a4",
  
  stripe_pk: 'pk_test_51Lp0t8KrZXv5izFxsLSVDr81inViRvf83TIOcBMibzvN3suGpwswOQmph8jHQPhjvh1DGn3q464K6LMA0h9Qdq1300bIi2o536',
  
  stripe_sk: 'sk_test_51Lp0t8KrZXv5izFxrTh7FZCzHKIENzyI590U9deuB3jniGmBC66B4OUTOSkOHjcvXZ3JPoqqakJvKXrMlp6WICWD0081ARQMBy',
  
  stripe_on: "http://localhost:3000",
  
  space_on: "http://localhost:3000",
  space_sk: "GWfAi+U70Nhc7J3ECUA8jdKbGL0w/wV3SmiEgFdkNKw",
  space_pk: "KEGWAR4T4MXKN3ECO2PS",
  space_ep: "sgp1.digitaloceanspaces.com",
  space_name: "numerables",
  space_link: "https://numerables.sgp1.digitaloceanspaces.com"
},

live: {
  // cache state file
  file: "0000.json",
  // caching interval seconds
  push: 86400,
  // component name length
  code: 6,
  // token bucket size
  size: 100000000,
  // replenish token seconds
  fill: 2,
  // receive byte limit (1GB)
  byte: 100000000000,
  // server sleep seconds
  wake: 30,
  
  test: 0,
  // symmetric encryption key
  hash:'VzmMkUYYC5179hlcSxMVVexuhW0iW12m',
  // nabla delta handshake
  bond:"VzmMkUYYC5179hlcSxMVVexuhW0iW12m",
  
  ipstack: "dabe3a28947dab89660ee5e461bc38a4",
  
  stripe_pk: 'pk_live_51Lp0t8KrZXv5izFxRQFELBYKRb7JihFZ6FUaHqwZuGq5FGQ2LPEMiEHS6MgDUmULHN4WfgS7LPpzgOUY5WcIGvaJ003DxPx0ZV',
  
  stripe_sk: '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',
  
  stripe_on: "https://saturdaystuff.com",
  
  space_on: "https://numerables.sgp1.digitaloceanspaces.com",
  
  space_sk: "GWfAi+U70Nhc7J3ECUA8jdKbGL0w/wV3SmiEgFdkNKw",
  space_pk: "KEGWAR4T4MXKN3ECO2PS",
  space_ep: "sgp1.digitaloceanspaces.com",
  space_name: "numerables",
  space_link: "https://numerables.sgp1.digitaloceanspaces.com"
}}

module.exports = start

if (process.env.clone) return

process.env = Object.assign(process.env, start[start.mode])

process.env.plug = start.plug 

require("./index")

try {
  if (start.plug) 
    require('up')(start)
 
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
