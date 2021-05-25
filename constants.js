const { sendEmail } = require('./sendEmail');
const { sendSms } = require('./sendSms');

exports.templates = {
  'reasonOneEmail': '1d67289a-2614-49dc-995e-680640caa799',
  'reasonOneSms': 'b3b96482-b560-4d0f-bb08-679de4e637cb'
}

exports.methods = {
  email: sendEmail, 
  sms: sendSms
}