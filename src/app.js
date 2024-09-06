import express from "express";
import cors from 'cors';
import Routes from './routes/index.js';
const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',Routes);
