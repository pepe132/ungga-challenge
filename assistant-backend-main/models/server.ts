import express, {  Application } from 'express';
import cors from 'cors'
import conversationRoutes from '../routes/conversation.routes'
import { dbConnection } from '../database/config';
const bp = require("body-parser");

export class Server{
    private app:Application;
    private port: string;

    private apiPaths={
       messages:'/api/messages'
    }
    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8000'

        //conectar a base de datos
        this.conectarDB();
        
        //Middlewares

        this.middlewares();

        //routes

        this.routes();

    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){

        this.app.use(cors())
    //     //directorio publico
        this.app.use(express.static('public'))
        // this.app.use(express.json());

        this.app.use(bp.json());

// Using body-parser middleware to parse incoming request bodies as URL encoded data
        this.app.use(bp.urlencoded({ extended: true }));
    }

    routes(){
        this.app.use(this.apiPaths.messages,conversationRoutes)
       
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en el puerto!!!',this.port);
        })
    }


}



