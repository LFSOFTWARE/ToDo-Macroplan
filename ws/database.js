const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/todo';



mongoose.connect(URI).then(()=>{
    console.log('Banco de dados is up!');

}).catch((err)=>{
    console.log(err);
})