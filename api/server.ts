import express, { Application, Request, Response } from 'express';
import crahelperRouter from './routes/crahelper';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from CRA Helper API');
});

app.use('/crahelper', crahelperRouter);

// Export for Vercel
export default app; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 