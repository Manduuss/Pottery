require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')
const customerRoute = require('./routes/customerRoute')
const errorMiddleware = require('./middleware/errorMiddleware')


//const Customer = require('./models/customerModel')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND= process.env.FRONTEND

const corsOptions = {
   origin: FRONTEND,
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

  
//we set port and route in env - file. if it doesn't use port it will use 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes

app.use('/api', productRoute);
app.use('/api', categoryRoute);
app.use('/api', customerRoute);



//declare a route to access e.g. website

app.get('/', (req, res) => {
    res.send('Hello NODE API, My name is MANDUS')
})


app.use(errorMiddleware);


mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log('node API app is running on port ${PORT}')
    });
    
}).catch((error) => {
    console.log(error)
})




