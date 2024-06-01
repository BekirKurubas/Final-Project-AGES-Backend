import './loadEnv.js';
import "./config/database.config.js";
import "./config/association.config.js";

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import { auth } from "express-oauth2-jwt-bearer";
import { examRouter } from './router/exam.router.js';
import { imageRouter } from './router/image.router.js';

const app = express();
const port = 4000;

app.use(morgan(process.env.ACCESS_LOG_FORMAT))

const corsOptions = {
  origin: "https://agestest.netlify.app",
  methods : ["GET", "POST", "PUT", "DELETE","OPTIONS"],
allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/exam', examRouter);
app.use('/api/v1/image', imageRouter);
// console.log(path.join(__dirname, 'images/b1_lo2.png'))

// app.use('/api/v1//image/1', express.static(path.join(__dirname, 'images/b1_lo2.png')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

process.on('uncaughtException', err => {
  process.exit(0);
})


app.listen(port, () => console.log(`Server is running on port ${port}`));

