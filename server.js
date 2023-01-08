// Start the server and listen for incoming requests to our API

// Get environment variables
require('dotenv').config();

// Import the application
const app = require('./app');

// Have the app listen
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
