import express from 'express'
import router from './routers'
import apicache from 'apicache'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const cache = apicache.middleware
app.get('/', (req, res) => {
  res.json({ message: "'backend_test'" })
})

app.use('/api',cache('1 minutes'), router)

export default app
