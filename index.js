let exp = require("express")

let app = exp()
let bodyParser = require("body-parser")
let port = process.env.PORT || 3000

app.use(exp.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{
    res.send(req.body.ipAddress)
})

app.listen(port,()=>{
    console.log("port just started at port 3000")
})