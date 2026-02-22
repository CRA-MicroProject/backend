import { Router, Request, Response } from 'express';

const router = Router();

const languages = [
  { code: 'en', name: 'English', translatedName: 'English' },
  { code: 'fr', name: 'Mongolian', translatedName: 'Монгол хэл' },
  { code: 'pt-br', name: 'Portuguese (Brazil)', translatedName: 'Português do Brasil' },
];

const englishTerms = [
  { termId: 1, english: 'Hello', description: 'Description of Hello' },
  { termId: 2, english: 'Goodbye', description: 'Description of Goodbye' },
];

const translations: Record<number, Record<string, { term: string; description?: string }>> = {
  1: {
    'fr': { term: 'Bonjour', description: 'Description of Hello in French' },
    'pt-br': { term: 'Bom dia', description: 'Descricao de ola em Portugues do Brasil' },
  },
};

router.get('/getAvailableLanguages', (_req: Request, res: Response) => {
  res.json(languages);
});

router.get('/getAllEnglishTermsAndMetadata', (_req: Request, res: Response) => {
  res.json(englishTerms);
});

router.get('/getTermTranslation', (req: Request, res: Response) => {
  let termId = 1;
  if (req.query.termId) {
    const parsed = parseInt(req.query.termId as string, 10);
    if (Number.isNaN(parsed)) return res.status(400).json({ error: 'Invalid parameter value for termId' });
    termId = parsed;
  } else if (req.query.term) {
    const found = englishTerms.find(t => t.english === req.query.term);
    if (!found) return res.status(400).json({ error: 'We could not find this term in our database' });
    termId = found.termId;
  }

  const lang = (req.query.lang as string) || 'en';
  if (!termId) return res.status(400).json({ error: 'We could not find this term in our database' });

  if (lang === 'en') {
    const t = englishTerms.find(t => t.termId === termId);
    if (!t) return res.status(404).json({ error: 'term not found' });
    return res.json({ termId, language: 'en', translation: t.english });
  }

  const termTranslations = translations[termId];
  if (!termTranslations) return res.status(404).json({ error: 'translation not found' });
  const translation = termTranslations[lang];
  if (!translation) return res.status(404).json({ error: 'translation not found for language ' + lang });
  res.json({ termId, language: lang, translation });
});

export default router;