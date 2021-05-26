const { sendEmail } = require('./sendEmail');
const { sendSms } = require('./sendSms');

exports.templates = {
  email: {
    3006: 'e066f3ea-9d8c-4647-a550-7be9b97b2723',
    3007: '182ec425-49af-4518-91b1-693960781128',
    3008: '1916a35c-f6e7-46b3-93cd-a180d416ed6b',
    3009: '32de8de5-5bbb-45db-a4cb-e812e8b45751',
    3011: 'fb552ec5-2ab5-4e8d-a052-20e508f395ba'
  },
  sms: {
    3006: '657eae85-cbc5-47dc-8e07-e3c40c561a74',
    3007: '79443df9-3815-46bd-b6ad-a7e076b10382',
    3008: '5060bf7d-01b0-4a4a-93cf-9678e2542938',
    3009: '9bb6cf57-db71-4a3b-9926-7645e8532dda',
    3011: '4b345da2-a9ec-4e2a-b219-234016b00b7b'
  }
}

exports.methods = {
  email: sendEmail, 
  sms: sendSms
}