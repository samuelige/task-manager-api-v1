import 'dotenv/config'
import express from 'express'
import taskRouter from './routes/tasks.routes';
import start from './db';
import notFound from './middleware/notFound';
import errorHandlerMiddleware from './middleware/errorHandler';

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

start(app);