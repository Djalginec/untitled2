import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3500
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})