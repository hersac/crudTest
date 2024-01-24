import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import TaskRoute from './routes/TaskRoute'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(cors());

app.use("/app", TaskRoute);

export default app;