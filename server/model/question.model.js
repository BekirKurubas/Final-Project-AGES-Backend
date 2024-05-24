// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.config.js";
// import Page from "./page.model.js";
// import Answer from "./answer.model.js";

// const Question = sequelize.define("Question", {
//     questionNumber: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     pageId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Page,
//             key: "id",
//         },
//     },
//     answerId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Answer,
//             key: "id",
//         },
//     },
// }, {
//     tableName: 'question',
//     primaryKey: ['firstName', 'lastName'],
// });

// export default Question; 