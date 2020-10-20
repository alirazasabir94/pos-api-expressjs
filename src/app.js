import express from 'express';
import logger from 'morgan';
import { connect } from './config/db';
import { restRouter } from './api';

const app = express();
const PORT = process.env.PORT || 3006;

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use('/api', restRouter);


app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
