import sequelize from "../config/database.config.js";
import Sequelize from "sequelize";

const Exam = sequelize.define("Exam", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    finished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'exam',
});

export default Exam;