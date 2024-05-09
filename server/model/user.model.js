import sequelize from "../config/database.config.js";
import Sequelize, { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
            msg: 'Last Name is required'
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: {
            msg: 'Email is required'
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
            msg: 'Password is required'
        },
    },
    role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false
      },
},{
    tableName: 'user'
});

export {User}