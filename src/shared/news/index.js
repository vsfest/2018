import codegen from 'codegen.macro'
/* eslint-disable no-unused-vars */
import md from 'react-markings'
/* eslint-enable no-unused-vars */

let news
codegen`
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

const filenames = fs.readdirSync(__dirname)
module.exports = "news = [" + 
filenames.filter(file => file.endsWith('.md'))
         .map(file => {
           const data = fs.readFileSync(path.join(__dirname, file), 'utf8')
           const content = fm(data)
           return "Object.assign(" + JSON.stringify(content.attributes) + ", { body: md\`" + content.body + "\` })"
         })
         .join(',') +
"]"
`

export default conferenceId => (
  news.filter(item => (
    item.conference === 'all' ||
    item.conference === conferenceId ||
    (Array.isArray(item.conference) && item.conference.indexOf(conferenceId) !== -1)
  ))
)
