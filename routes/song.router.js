import express from 'express';
import sequelize from '../config/seq.config.js';
import SongController from '../controllers/song.controller.js';

const router = express.Router();

const controller = new SongController();

router.get('/songs', (req, res) => {});

router.post("/songs", (req, res) => {
    controller.create(req, res);
});



export {router as SongRouter}