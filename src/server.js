const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const app = express()

const serve = (path) => {
  return serveStatic(`build/${path}`, {
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
  console.log(req.hostname, req.path)
  return serve('')(req, res, next)
})

app.get('*', (request, response) => response.sendFile(path.resolve(__dirname, 'build/200.html')))

module.exports = app
