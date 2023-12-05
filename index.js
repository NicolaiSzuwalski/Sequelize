import express from 'express';
import dotenv from 'dotenv';
import { SongRouter } from './routes/song.router.js'
import { InstallRouter } from './routes/install.router.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded(({extended: true})));

app.use(SongRouter, InstallRouter);

app.listen(port, () => {
    console.log(`server køre med port http://localhost:${port}`);
});


