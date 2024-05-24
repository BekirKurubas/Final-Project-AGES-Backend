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
    // examId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Exam,
    //         key: "id"
    //     }
    // },
}, {
    tableName: 'page'
});

export default Page;