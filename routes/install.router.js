import express from 'express';
import sequelize from '../config/seq.config.js';
import Song from "../models/song.models.js";


const router = express.Router();


router.get("/install", async (req, res) => {
    try{
        await sequelize.sync()
        res.sendStatus(200)
    }catch(error){
        res.send(error)
    }
});

export {router as InstallRouter}