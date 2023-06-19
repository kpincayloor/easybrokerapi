const express = require('express');
const EasyBrokerAPI = require('../EasyBrokerAPI');

const app = express();
const apiKey = 'l7u502p8v46ba3ppgvj5y2aad50lb9';
const easyBrokerAPI = new EasyBrokerAPI(apiKey);

app.get('/properties', async (req, res) => {
  try {
    const propertyTitles = await easyBrokerAPI.getProperties();
    res.json(propertyTitles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});