const express = require('express')
const app = express()

//declare a route to access e.g. website

app.get('/', (req, res)=> {
    res.send('Hello NODE API')
})

app.listen(3000, ()=> {
    console.log('node API app is running on port 3000')
})