import express from 'express'
import router from './routers'
import apicache from 'apicache'
import morgan from 'morgan'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
const cache = apicache.middleware
app.get('/', (req, res) => {
  res.json({ message: "'backend_test'" })
})

app.use('/api',cache('1 minutes'), router)

export default app
