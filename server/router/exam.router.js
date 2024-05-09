import express from "express";
const router = express.Router();
import { auth } from "express-oauth2-jwt-bearer";

router.use(auth({
    audience: `${process.env.AUTH0_AUDIENCEN}`,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
}));

// start exam
router.post('/', (req, res) => {
    console.log("authenticated call")
    try {
        // await Exam.start();
        res.send({
            
            msg: "Your access token was successfully validated!",
        });
    } catch (e) {
        console.log(e)
    }
})

export { router }


