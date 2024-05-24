import sequelize from "../config/database.config.js";
import Sequelize from "sequelize";
import Page from "./page.model.js";

const Answer = sequelize.define("Answer", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // pageId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Page,
    //         key: "id"
    //     }
    // },
    answerNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    answer: {
        type: Sequelize.CHAR,
        allowNull: true
    }
}, {
    tableName: 'answer'
});

export default Answer;