# Covid vaccine status Notify 

## Install 
`npm install`

## Run
`node app.js`

The temporary / permanent failures appear to only show that in the dashboard (worth checking with other teams how they check these)
s
### SMS URLs

success http://localhost:3000?methodId=sms&templateId=reasonOneSms&contact=07700900001

error (using email template) http://localhost:3000?methodId=sms&templateId=reasonOneEmail&contact=07700900001

temporary-failure http://localhost:3000?methodId=sms&templateId=reasonOneSms&contact=07700900003

permanent-failure http://localhost:3000?methodId=sms&templateId=reasonOneSms&contact=07700900002

### Email URLs
success http://localhost:3000?methodId=email&templateId=reasonOneEmail&contact=test@test.com

error (using sms template) http://localhost:3000?methodId=email&templateId=reasonOneSms&contact=test@test.com

temporary-failure http://localhost:3000?methodId=email&templateId=reasonOneEmail&contact=temp-fail@simulator.notify	

permanent-failure http://localhost:3000?methodId=email&templateId=reasonOneEmail&contact=perm-fail@simulator.notify
