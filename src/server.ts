import express from 'express'
import router from './routers'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.json({ message: "'backend_test'" })
})

app.use('/api', router)

export default app
