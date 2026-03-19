import { Router, Request, Response } from 'express';
import { getLanguages, getEnglishTerms, getTermTranslation } from '../db/queries';

const router = Router();

router.get('/getAvailableLanguages', async (_req: Request, res: Response) => {
  try {
    const languages = await getLanguages();
    res.json(languages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve languages' });
  }
});

router.get('/getAllEnglishTerms', async (_req: Request, res: Response) => {
  try {
    const terms = await getEnglishTerms();
    res.json(terms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve terms' });
  }
});

router.get('/getTermTranslation', async(req: Request, res: Response) => {
  let termId = 1;

   try {
    const parsedTermId = parseInt(req.query.termId as string, 10);
    if (Number.isNaN(parsedTermId)) return res.status(400).json({ error: 'Invalid parameter value for termId' });
      const lang = (req.query.lang as string) || 'en';

      const termsTranslation = await getTermTranslation(parsedTermId, lang);
      res.json(termsTranslation);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve translation' });
  }

});

export default router;
