import express, { Application, Request, Response } from 'express';
import crahelperRouter from './routes/crahelper';
import serverless from 'serverless-http';

// const express = require('express');
// const app = express();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from CRA Helper API');
});

app.use('/crahelper', crahelperRouter);

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); 
}

// Export for Vercel
export default serverless(app);
