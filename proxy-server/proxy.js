const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const got = require('got')

const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
])

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('*', (req, res, next) => {
  // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    req.header('access-control-request-headers'),
  )
  next()
})

app.get('/proxy', async (req, res) => {
  let link = req.get('link')
  if (link) {
    link = 'https://' + link.replace(/"/g, '')
    try {
      const {body: html, url} = await got(link)
      const metadata = await metascraper({
        html,
        url,
      })
      res.json(metadata)
    } catch (error) {
      res.send('error on scrapping the link ' + error.message)
      console.log('error is', error)
    }
  } else {
    res.status(404)
    res.send('link header parameter not provided')
  }
})

let port = 5000
app.listen(port, () => {
  console.log(`proxy server is running at localhost:${port}`)
})
