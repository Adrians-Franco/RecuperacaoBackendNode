import express, {json} from "express"
import router from "./routes/Recuperacao.js"
const app = express()

app.use(express.json())

app.use('/api', router)

const port = 3001
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})