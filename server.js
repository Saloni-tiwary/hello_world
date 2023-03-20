const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello world');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port http://127.0.0.1:${PORT}`);
});
