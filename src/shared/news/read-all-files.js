
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

const filenames = fs.readdirSync(__dirname)
module.exports = "news = [" +
filenames.filter(file => file.endsWith('.md'))
         .map(file => {
           const data = fs.readFileSync(path.join(__dirname, 'utf8'))
           console.log(data)
           const content = fm(data)
           return JSON.stringify(content)
         })
         .join(',') +
"]"

console.log(module.exports)
