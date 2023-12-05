import express from 'express';
import dotenv from 'dotenv';

import { MainRouter } from './routes/main.route.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded(({extended: true})));

app.use(MainRouter);

app.listen(port, () => {
    console.log(`server køre med port http://localhost:${port}`);
});


