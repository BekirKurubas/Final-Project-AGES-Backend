import sequelize from "../config/database.config.js";
import Sequelize, { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // TODO get auth0 Id from auth token
    // user: { 
    //     type: Sequelize.STRING, 
    //     allowNull: false
    //   },
    started: {
        type: DataTypes.Date,
        allowNull: false,
    },
    // TODO store answers
    // answers: { 
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     isEmail: {
    //         msg: 'Email is required'
    //     },
    // },
},{
    tableName: 'user'
});

export {Exam}