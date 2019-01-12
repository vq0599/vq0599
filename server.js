const next = require('next')
const express = require('express')


const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 8872

app.prepare().then(() => {
  server.get('/p/:id', (req, res) => {
    const query = { id: req.params.id }

    app.render(req, res, '/post', query)
  })

  server.get('/index', (req, res) => {
    res.redirect('/')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
