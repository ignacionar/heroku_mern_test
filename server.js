import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './db/db.js';
import path from 'path';
import { createTest } from './controllers/test.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

connectDB()

const PORT = process.env.PORT || 5000;

const server = express()

server.use(cors());
server.use(express.json());

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, '/client/build')));

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client', 'build' , 'index.html'));
  })
  
} else {
  server.get('/', (req, res) => {
    res.send('Api running');
  })
}

server.post('/', createTest)

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})
