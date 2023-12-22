import express from 'express'
import router from './routers'
import apicache from 'apicache' // for caching simply for all handlers
import morgan from 'morgan' //for logging requests
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
const cache = apicache.middleware
app.get('/', (req, res) => {
  res.json({ message: "'backend_test'" })
})

app.use('/api',cache('1 minutes'), router)//api router for necessary handlers

export default app
