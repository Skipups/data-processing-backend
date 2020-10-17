const fs= require('fs')
const assert= require('assert')

const report= fs.readFileSync('./data/processed/education.json', 'utf-8', (err,data)=>{
  if(err)  throw err;
  return data
}) //string

const reportData= JSON.parse(report)  //converts to an object

//testing for:
// The top-level data object is an array, which has a type of “object”
// The array has 3 member objects
// Each member object has a label and a value.


assert(typeof reportData === 'object', "The typeof JSON should be 'object'.")
assert(reportData.length ===3, "Failed: should have 3 members")

for(let i=0; i<reportData.length; i++){
let eachItem= reportData[i]
assert(eachItem.label !== undefined, "Failed: missing label")
assert(eachItem.value !== undefined, "Failed, missing value")
}
console.log('testing complete')
