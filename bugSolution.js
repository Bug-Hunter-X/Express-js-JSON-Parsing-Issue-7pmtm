const express = require('express');
const app = express();
app.use(express.json()); // Middleware must be placed before route handler
app.post('/users', (req, res) => {
  console.log(req.body); // req.body will now contain the parsed JSON data
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));