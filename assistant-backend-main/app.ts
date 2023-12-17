import dotenv from 'dotenv';
import { Server } from './models/server';

//For env File 
dotenv.config();

const server = new Server()

server.listen()

