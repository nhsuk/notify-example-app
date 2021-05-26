require('dotenv').config()
const express = require('express');

const { sendEmail } = require('./sendEmail');
const { sendSms } = require('./sendSms');
const { templates } = require('./constants');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Send notification using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html
 * 
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Object} - Notify response object or error
 */
app.post('/email', async (req, res) => {
  try {
    const { reasonCode, user } = req.body;
    const template = templates.email[reasonCode];
    const notify = await sendEmail(template, user);
    return res.json(notify.data);
  } catch(error) {
    return res.json(error.response.data);
  }
});

/**
 * Send notification using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html
 * 
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Object} - Notify response object or error
 */
 app.post('/sms', async (req, res) => {
  try {
    const { reasonCode, user } = req.body;
    const template = templates.sms[reasonCode];
    const notify = await sendSms(template, user);
    return res.json(notify.data);
  } catch(error) {
    return res.json(error.response.data);
  }
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
});
