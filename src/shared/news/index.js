let news = [
  require('./2017-11-13-Test.md'),
]
console.log(news)

export const newsForConference = conferenceId => (
  news.filter(item => (
    item.conference === 'all' ||
    item.conference === conferenceId ||
    (Array.isArray(item.conference) && item.conference.indexOf(conferenceId) !== -1)
  ))
)

const newsByUrl = news.reduce((accum, item) => (
  { ...accum, [item.url]: item }
), {})

//console.log(newsByUrl)
export default newsByUrl
