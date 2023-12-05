import Song from "../models/song.models.js";

export default class SongController{
    constructor(){
        console.log('songController instantiated');
    }
    create = async (req, res) => {

        const { title, context, is_active } = req.body;
        if(title && context && is_active){
            const result = await Song.create(req.body);
            res.status(200).send({
                message: 'Record created successfully',
                new_id: result.id
            })
        }else{
            res.status(403).send({
                message: 'Wrong parameter values'
            })
        }
    }
}

