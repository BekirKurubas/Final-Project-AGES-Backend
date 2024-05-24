import Page from "../model/page.model.js"
import Answer from "../model/answer.model.js"
import Exam from "../model/exam.model.js";
// import Question from "../model/question.model.js";

Exam.hasMany(Page, {as: "pages"}) //, { as: "pages", foreignKey: "questionPageId" })
Page.belongsTo(Exam) //, { as: "exam", foreignKey: "examId" })

Page.hasMany(Answer, {as: "answers"})//, { as: "answers", foreignKey: "answerId" });
Answer.belongsTo(Page)//, { as: "page", foreignKey: "pageId" });



