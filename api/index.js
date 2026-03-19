// Vercel serverless entry: loads compiled TS output (see npm run build / tsc).
const server = require('../dist/server');
module.exports = server.default ?? server;
