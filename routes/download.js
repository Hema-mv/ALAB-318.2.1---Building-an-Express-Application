const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const file = path.join(__dirname, '../public/files/full-stack-Roadmap.pdf'); // Adjust the path to your file
  res.download(file, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

module.exports = router;
