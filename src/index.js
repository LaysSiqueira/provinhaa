import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { soma,media,dobro } from './servico.js'



const server = express();
server.use(cors());
server.use(express.json());

server.get ('/ping',(req, resp)=>{
    resp.send('pong');
})               

server.get('dobro/:numero' , (req, resp)=> {
    let nu= Number(req.params.numero);
    let resposta = dobro(nu)

    resp.send({
        dobro:resposta
    })
})

server.listen(process.env.PORT,
    ()=> console.log(`api online na porta ${process.env.PORT}`));

server.get('/somar',(req,resp)=>{
    let {a,b}= req.query;
    let x = soma(Number(a),Number(b))

    resp.send({
        soma: x
    })
})

server.get('/media',(req,resp)=>{
    let {n1, n2, n3} = req.query;
    let y = media(Number(n1), Number(n2), Number(n3));
    resp.send({
        media: y
    })
})


