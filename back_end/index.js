const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ListRouter = require("./Routes/ListRouter")
const app = express();
const port = 8000;
app.use(bodyParser.json());
//const mongoURI = "mongodb+srv://crudApp:crud123@cluster0.ftazx.mongodb.net/Lists?retryWrites=true&w=majority";
const mongoURI = "mongodb://localhost:27017/users"
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}); 
    
app.use("/",ListRouter);
    
app.listen(port);