const  express = require("express")
const path  =require("path")
const fs = require('fs')
const app = express();
const port = 80;
// Express Specific Stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())
// Set the template Engine as PUG
app.set('view engine','pug');

app.set('views',path.join(__dirname,"views"))
// Endpoint
app.get('/',(req,res)=>{
    const process = 
    res.status(200).render('index.pug')
})
app.post('/',(req,res)=>{
   // console.log(req.body); 
   name = req.body.name
   age = req.body.age
   gender = req.body.gender
   email = req.body.email
   address = req.body.address
   let outputtowrite = `the name of the client is ${name}, ${age} years old, ${gender}, & email id is ${email}, residing at ${address}`
    fs.writeFileSync('output.txt',outputtowrite)
    const params = {'message ': 'your form submited sucessfully'} 
    res.status(200).render('index.pug',params)
})

app.get("/demo",(req,res)=> {
    res.status(400).render('demo',{title:"hello rickt",message:"how are you"})
})
app.get("/about",(req,res)=> {
    res.send("This is my first app with about page")
})
app.post("/about",(req,res)=> {
    res.send("This is my post first app with about page")
})
app.listen(port,()=> {
    console.log(`working on port ${port}`);
})