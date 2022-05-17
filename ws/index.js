const express = require("express")
const app = express()
const morgan = require("morgan")
const database = require("./database")
// const http = require("http")

app.use(morgan('dev'))
app.use(express.json())
app.set('port',process.env.port||8000)


// const routes = require("./src/routes/api.routes")

// app.use("/",routes)

app.listen(app.get('port'),()=>{
    console.log("SERVER IS UP => "+app.get('port'));
})
