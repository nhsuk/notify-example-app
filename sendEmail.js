const { NotifyClient } = require('notifications-node-client');

const notifyClient = new NotifyClient(process.env.API_KEY);

/**
 * Send email using Gov Notify
 * https://docs.notifications.service.gov.uk/node.html#send-an-email
 * 
 * @param {string} templateId - notify template ID
 * @param {Object} user - user
 * @param {string} user.firstName - user first name
 * @param {string} user.lastName - user last name
 * @param {string} user.emailAddress - user email address
 * @returns {Object} - Notify response object
 */
async function sendEmail(templateId, { emailAddress, firstName, lastName }) {
  return await notifyClient.sendEmail(templateId, emailAddress, {
    personalisation: {
      firstName,
      lastName
    },
    reference: null,
  });
};

exports.sendEmail = sendEmail;
