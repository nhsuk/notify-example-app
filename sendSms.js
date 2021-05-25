const { NotifyClient } = require('notifications-node-client');

const notifyClient = new NotifyClient(process.env.API_KEY);

/**
 * Send SMS using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html#send-a-text-message
 * 
 * @param {string} templateId - notify template ID
 * @param {string} phoneNumber - phone number
 * @returns {Object} - Notify response object
 */
async function sendSms(templateId, phoneNumber) {
  return await notifyClient.sendSms(templateId, phoneNumber, {
    personalisation: {},
    reference: null,
  });
};

exports.sendSms = sendSms;
