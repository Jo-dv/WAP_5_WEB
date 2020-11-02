const express = require("express");
const app = express()
const db = require("./models/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

db.start.connect((err) => {
    if(err){
      console.log("no!!")
    }else{
      console.log("db is connected to MYSQL!!")
    }
  })
  
app.get('/api/hello', (req,res) => {
  console.log("api/hello is connected!")
  res.send("hi!!");
})

app.listen(7000, () => console.log(`app is listening on 7000`))