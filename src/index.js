import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
 
server.listen(process.env.PORT,
               ()=> console.log('api online na porta ${process.env.PORT}'));

server.get ('/ping',(req, resp)=>{
    resp.send('pong');
})               

server.get('dobro/:numero',(req, resp)=>{
    let numero=Number(req.params.numero);
    let dobro=numero*2;
    resp.send(String(dobro));
    
})