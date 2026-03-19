// Vercel serverless entry: all requests are handled by the Express app (TS default export → .default)
module.exports = require('../dist/server').default;
