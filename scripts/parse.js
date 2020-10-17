//reads CSV files from teh raw folder and converts it to JSON, then writes it to JSON files in the processed folder

// 1. get data to a String, reading the .csv file with fs and bind it to a variable
// 2. break string into array of rows, marking each new line with \n
// 3. get the label and value from each row, split each row into it's own array
// 4. turn it into a Object
// 5. aggregate restructred data
// 6. serialize data with JSON.stringify
// 7. write to education.json using fs module

const fs= require('fs')


let allItems = []

const cvsFile = fs.readFileSync('./data/raw/education.csv', 'utf-8');

const csvRows= cvsFile.split('\n')


console.log(csvRows)

csvRows.forEach(csvObj)
function csvObj(csvRow){
const keyValue =csvRow.split(",")

let reportItem={
  'label': keyValue[0],
  'value': keyValue[1]
}
allItems.push(reportItem)
}

//serialize
const reportJSON= JSON.stringify(allItems)
fs.writeFile('./data/processed/education.json', reportJSON, function(err){
  if(err) throw err;
  console.log('added reportJSON successfully')
})

