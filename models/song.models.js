import sequelize from "../config/seq.config.js";
import {Model, DataTypes} from "sequelize";

class Song extends Model{

}

Song.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      context: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
  sequelize,
  modelName: "song"  
});

export default Song;