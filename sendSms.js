const { NotifyClient } = require('notifications-node-client');

const notifyClient = new NotifyClient(process.env.API_KEY);

/**
 * Send SMS using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html#send-a-text-message
 * 
 * @param {string} templateId - notify template ID
 * @param {Object} user - user
 * @param {string} user.firstName - user first name
 * @param {string} user.lastName - user last name
 * @param {string} user.phoneNumber - user phone number
 * @returns {Object} - Notify response object
 */
async function sendSms(templateId, { firstName, lastName, phoneNumber }) {
  return await notifyClient.sendSms(templateId, phoneNumber, {
    personalisation: {
      firstName,
      lastName
    },
    reference: null,
  });
};

exports.sendSms = sendSms;
