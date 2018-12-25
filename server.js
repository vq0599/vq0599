const next = require('next')
const express = require('express')


const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 8872

app.prepare().then(() => {
  server.get('/a/:id', (req, res) => {
    const query = { id: req.params.id }

    app.render(req, res, '/article', query)
  })

  // 首页
  server.get('/', (req, res) => {
    app.render(req, res, '/home')
  })

  // 管理后台首页
  server.get('/admin', (req, res) => {
    app.render(req, res, '/admin/statistics')
  })

  // 文章编辑
  server.get('/admin/articles/edit/:id', (req, res) => {
    const query = { id: req.params.id }
    app.render(req, res, '/admin/articles/edit', query)
  })

  server.get('*', (req, res) => {
    if (req.url.endsWith('/')) {
      res.redirect(req.url.replace(/\/$/, ''))
      return
    }

    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
