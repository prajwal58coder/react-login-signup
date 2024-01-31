// cors-server.js
const cors_anywhere = require('cors-anywhere');

const PORT = 3000; // Choose a port that is not conflicting with other services

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});
