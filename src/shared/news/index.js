const news = [
  require('./2017-11-13-Test').default
]

export default conferenceId => (
  news.filter(item => (
    item.conference === 'all' ||
    item.conference === conferenceId ||
    Array.isArray(item.conference) && item.conference.indexOf(conferenceId) !== -1
  ))
)
