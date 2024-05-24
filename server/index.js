import './loadEnv.js';
import "./config/database.config.js";
import "./config/association.config.js";

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import { auth } from "express-oauth2-jwt-bearer";
import { examRouter } from './router/exam.router.js';


const app = express();
const port = 4000;

app.use(morgan(process.env.ACCESS_LOG_FORMAT))
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/exam', examRouter);

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).send('Something broke!'); // Send a generic error response
});

process.on('uncaughtException', err => {
  // logger.error(`Uncaught Exception ${err.message}`);
  process.exit(0);
})
// const checkJwt = auth({
//   audience: `${process.env.AUTH0_AUDIENCE}`,
//   issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
//   algorithms: ["RS256"],
// });
// app.get("/api/v1/test", checkJwt, (req, res) => {
//   console.log("test");
//   res.send({
//     msg: "Your access token was successfully validated!",
//   });
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));