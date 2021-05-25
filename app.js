require('dotenv').config()
const express = require('express');
const { templates, methods } = require('./constants');

const app = express();

/**
 * Send notification using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html
 * 
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Object} - Notify response object or error
 */
app.get('/', async (req, res) => {
  try {
    const { methodId, templateId, contact } = req.query;
    const method = methods[methodId];
    const template = templates[templateId];
    const notify = await method(template, contact);
    return res.json(notify.data);
  } catch(error) {
    return res.json(error.response.data);
  }
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
});
