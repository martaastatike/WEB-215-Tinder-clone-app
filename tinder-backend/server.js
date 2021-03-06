import express  from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from 'cors';
//App Config
const app =express()
const port =process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin1:4MA7U8377DMyTRZb@cluster0.e2bgi.mongodb.net/?retryWrites=true&w=majority';  

// Middlewares

app.use(express.json());
app.use(cors());


//DB config

mongoose.connect (connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});
//API Endpoints

app.get("/", (req, res) => res.status(200).send("HELLO CLEVER PROGRAMERS!!!"));
app.post('/tinder/cards', (req, res) => {
    const dbCard =req.body;
    Cards.create(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    const dbCard =req.body;
    Cards.find(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

 
// Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));
