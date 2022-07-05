import express, { response } from 'express'
import nunjucks from 'nunjucks'
import axios from 'axios'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'html')

nunjucks.configure('views', {
    express: app,
    watch: true,
})

app.use((req, res, next) => {
    next()
})

app.get('/', async (req, res) => {
    const response = await axios.post('http://localhost:4001/api/block/blockList')
    const data = response.data.result

    res.render('index', { data: data })
})

app.get('/search', async (req, res) => {
    const idx = req.url.split('?')[1]

    const body = { idx: idx }
    const response = await axios.post('http://localhost:4001/api/block/searchList', body)
    const [data] = response.data.result
    res.render('search', { data })
})

app.listen(3000, () => {
    console.log('서버시작')
})
