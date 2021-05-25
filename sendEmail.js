const { NotifyClient } = require('notifications-node-client');

const notifyClient = new NotifyClient(process.env.API_KEY);

/**
 * Send email using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html#send-an-email
 * 
 * @param {string} templateId - notify template ID
 * @param {string} emailAddress - email address
 * @returns {Object} - Notify response object
 */
async function sendEmail(templateId, emailAddress) {
  return await notifyClient.sendEmail(templateId, emailAddress, {
    personalisation: {},
    reference: null,
  });
};

exports.sendEmail = sendEmail;
