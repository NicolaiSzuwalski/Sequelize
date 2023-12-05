import express from 'express';
const router = express.Router();
import sequelize from "../config/seq.config.js";

// router.get("/", (req, res) => {
//     console.log(1234);
// });

export { router as MainRouter }

router.get("/", (req, res) => {
    (async () => {
        try{
        await sequelize.authenticate();
        console.log('der er forbindelse')
    } catch(error){
        console.error('Fejl kunne ikke forbinde til databasen')
    }
    })()
});