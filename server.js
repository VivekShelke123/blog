import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const url = "localhost:/4000/";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

app.get('/',async (req,res)=>{
  const response = axios.get()
})


app.listen(port,()=>{
  console.log(`Server at ${port} Started`);
})