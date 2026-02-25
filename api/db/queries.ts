import pool from './dbUtil'; // Path to your connection module

export async function getLanguages() {
  try {
    const result = await pool.query('SELECT * FROM languages');
    // console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err);
  }
}

export async function getEnglishTerms() {
  try {
    const result = await pool.query('SELECT * FROM terms');
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err);
  }
}

export async function getTermTranslation(termId: number, lang: string) {
  try {
    const result = await pool.query(
      'SELECT * FROM translations WHERE term_id = $1 AND LOWER(locale_code) = LOWER($2)',
      [termId, lang]
    );
    return result.rows[0];
  } catch (err) {
    console.error('Error executing query', err);
  }
}   
