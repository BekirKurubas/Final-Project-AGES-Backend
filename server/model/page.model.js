import sequelize from "../config/database.config.js";
import Sequelize from "sequelize";
import Exam from "./exam.model.js";

const Page = sequelize.define("Page", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pageNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'page'
});

export default Page;