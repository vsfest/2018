const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const app = express()

const serve = (site) => {
  return serveStatic(`build/${site}`, {
    extensions: ['html'],
    setHeaders(res, path) {
      const isRevved = /[a-f0-9]{7,}/.exec(path)
      res.setHeader('Cache-Control',
        isRevved
          ? `max-age=31536000,immutable`
          : `max-age=0,s-maxage=31536000`)
    }
  })
}

const css = serve('css')
const js = serve('js')
const decompress = serve('decompress')

app.use((req, res, next) => {
  switch (req.hostname) {
    case '2018.cssconf.com.au':
      return css(req, res, next)
    case '2018.jsconfau.com':
      return js(req, res, next)
    case '2018.decompress.com.au':
      return decompress(req, res, next)
  }
})

app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, 'build/200.html')))

module.exports = app
