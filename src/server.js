const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const app = express()

const serve = (path) => {
  return serveStatic(`dist/${path}`, {
    extensions: ['html'],
    setHeaders(res, path) {
      const isRevved = /[a-f0-9]{7,}/.exec(path)
      res.setHeader('Cache-Control',
        isRevved
          ? `max-age=31536000,immutable`
          : `max-age=0,s-maxage=31536000`)
    },
  })
}

const css = serve('css')
const js = serve('js')
const decompress = serve('decompress')

app.use((req, res, next) => {
  console.log(req.hostname, req.path)

  if (/css/.exec(req.hostname))
    return css(req, res, next)
  else if (/decompress/.exec(req.hostname))
    return decompress(req, res, next)
  else
    return js(req, res, next)
})

module.exports = app
