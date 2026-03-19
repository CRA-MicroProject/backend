import express, { Application, Request, Response } from 'express';
import crahelperRouter from './routes/crahelper';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from CRA Helper API');
});

app.use('/crahelper', crahelperRouter);

// Run locally with npm start; on Vercel the app is used by api/index.js
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
