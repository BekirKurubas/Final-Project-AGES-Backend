import express from 'express';
import { auth } from "express-oauth2-jwt-bearer";
import Exam from '../model/exam.model.js';
import Answer from '../model/answer.model.js';
import Page from '../model/page.model.js';
import { Op } from "sequelize";



const examRouter = express.Router();

examRouter.use(auth({
    audience: `${process.env.AUTH0_AUDIENCE}`,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
}));

// start exam
examRouter.post('/', async (req, res) => {
    console.log("authenticated call")
    try {
        const now = new Date()
        const authId = req.auth.payload.sub; // The decoded JWT payload.
        const runningExams = await Exam.findAll({ where: { user: authId, finished: false, endTime: { [Op.gt]: now } } });
        if (!!runningExams.length) {
            res.status(400).send({ msg: "User has already a running exam" });
            return;
        }
        const ninetyMinutesInMilliseconds = 90 * 60 * 1000;
        const exam = await Exam.create({
            user: authId,
            endTime: new Date(now.getTime() + ninetyMinutesInMilliseconds)
        })
        res.send(exam);

    } catch (e) {
        console.log(e)
    }
});

// store answer
examRouter.post('/:id/page/', async (req, res) => {
    console.log("store answer");
    try {
        const authId = req.auth.payload.sub;
        const examId = req.params.id;
        const pageCreate = req.body;
        const exam = await Exam.findOne({ where: { id: examId, user: authId } });
        if (!exam) {
            res.status(400).send({ msg: "No exam with this id for this user." });
            return;
        }

        if (exam.finished || exam.endTime < new Date()) {
            res.status(400).send({ msg: "Exam is already finished." });
            return;
        }
        const existingPage = await Page.findOne({ where: { ExamId: examId, pageNumber: pageCreate.pageNumber } })
        if (!existingPage) {
            console.log("create new page and answers")
            const page = await Page.create({ ExamId: examId, pageNumber: pageCreate.pageNumber })
            await Promise.all(
                pageCreate.answers.map(async (a) => {
                    const answer = await Answer.create({ PageId: page.id, answerNumber: a.answerNumber, answer: a.answer })
                })
            );
            res.status(200).send({ msg: "Answer stored" })
        } else {
            console.log("update answers")
            await Promise.all(
                pageCreate.answers.map(async (a) => {
                    const answer = await Answer.update({ answer: a.answer }, { where: { answerNumber: a.answerNumber, PageId: existingPage.id } })
                    console.log(answer);
                })
            );
            res.status(200).send({ msg: "Answer updated" })
        }
    } catch (e) {
        console.log(e)
    }
});

// get answer
examRouter.get('/:examId/page/:pageNumber', async (req, res) => {
    console.log("get answer");
    try {
        const authId = req.auth.payload.sub;
        const examId = req.params.examId;
        const pageNumber = req.params.pageNumber;
        const exam = await Exam.findByPk(examId)
        if (!exam) {
            res.status(404).send({ msg: "Exam not found" })
        }
        if (exam.user != authId) {
            res.status(403).send({ msg: "Forbidden" })
        }
        const page = await Page.findOne({ where: { ExamId: examId, pageNumber: pageNumber } })
        console.log(page)
        const answers = await Answer.findAll({ where: { PageId: page.id }, order: [['answerNumber', 'ASC']] })
        res.status(200).send(answers)
    } catch (e) {
        console.log(e)
    }
});

// finish exam
examRouter.post('/:examId/finish', async (req, res) => {
    console.log("finish exam");
    try {
        const authId = req.auth.payload.sub;
        const examId = req.params.id;
        const exam = await Exam.findOne({ where: { id: examId, user: authId } });
        if (!exam) {
            res.status(400).send({ msg: "No exam with this id for this user." });
            return;
        } else {
            await Exam.update({ finished: true }, { where: { id: examId } })
            console.log("Exam done")
            res.status(200).send({ msg: "exam finished" })
        }
    } catch (e) {
        console.log(e)
    }
});
export { examRouter };

// TODO audience not found but exists 
