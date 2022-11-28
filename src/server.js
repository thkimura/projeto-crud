const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

// Conexao com banco de dados
db.connect()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitar server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true}))

//definindo as rotas
app.use('/', routes)

// 404 error (not found)
app.use((req, res)=>{ //middleware
  res.send('PAGE NOT FOUND')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))