const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'react-app','build')))

app.get('/',(req,res)=>
        {
                res.send('Hello Ross')
        })


app.get('/reactApp', (req,res)=>{
	res.sendFile(path.join(__dirname,'react-app','build','index.html'))
})



app.listen(8081,()=>{
        console.log('server listening on port 8081')
})

