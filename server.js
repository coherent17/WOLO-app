//HTTP SERVER
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');

  /// app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post('', (req, res) => {
    const Data = req.body;
    console.log('Received data:', Data);
  }) ;

  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });