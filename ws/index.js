const express = require("express")
const app = express()
const morgan = require("morgan")
const database = require("./database")
// const http = require("http")

app.use(morgan('dev'))
app.use(express.json())

const cors = require('cors')

app.use(cors())
app.set('port',process.env.port||8000)


const routes = require("./routes/routes")

app.use("/",routes)

app.listen(app.get('port'),()=>{
    console.log("SERVER IS UP => "+app.get('port'));
})
