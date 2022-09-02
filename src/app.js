import express from 'express'
import path from 'path'
import mainRouter from './routes/main.js'

const app = express()

app.use(express.static(path.resolve('./public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use('/', mainRouter)

app.use((req, res, next) => {
  const notFound = new Error('Not found')
  notFound.code = 404
  next(notFound)
})

app.use((err, req, res, next) => {
  const title = 'ERROR / Santiago'
  return res.status(err.code).render('error', {
    title,
    status: err.code,
    message: err.message
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running @ ${PORT}`))
