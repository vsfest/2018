let news = [
  require('./2018-02-16-future-js.md'),
  require('./2018-02-16-future-css.md')
]
console.log(news)

export const newsForConference = conferenceId =>
  news.filter(
    item =>
      item.conference === 'all' ||
      item.conference === conferenceId ||
      (Array.isArray(item.conference) &&
        item.conference.indexOf(conferenceId) !== -1)
  )

const newsByUrl = news.reduce(
  (accum, item) => ({ ...accum, [item.url]: item }),
  {}
)

//console.log(newsByUrl)
export default newsByUrl
