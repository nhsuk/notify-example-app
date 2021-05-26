# Covid vaccine status Notify 

## Install 
`npm install`

## Run
`node app.js`

The temporary / permanent failures appear to only show that in the dashboard (worth checking with other teams how they check these)
## Examples

### SMS success
```
curl --location --request POST 'http://localhost:3000/sms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "phoneNumber": "07700900001"
    }
}'
```

### SMS error (invalid number)
```
curl --location --request POST 'http://localhost:3000/sms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "phoneNumber": "01234567890"
    }
}'
```

### SMS temporary failure
```
curl --location --request POST 'http://localhost:3000/sms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "phoneNumber": "07700900003"
    }
}'
```	

### SMS permanent failure
```
curl --location --request POST 'http://localhost:3000/sms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "phoneNumber": "07700900002"
    }
}'
```	

### Email success
```
curl --location --request POST 'http://localhost:3000/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "emailAddress": "tom.doughty1@nhs.net"
    }
}'
```

### Email error (invalid email)
```
curl --location --request POST 'http://localhost:3000/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "emailAddress": "tom.doughty1@nhsnet"
    }
}'
```

### Email temporary failure
```
curl --location --request POST 'http://localhost:3000/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "emailAddress": "temp-fail@simulator.notify"
    }
}'
```	

### Email permanent failure
```
curl --location --request POST 'http://localhost:3000/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reasonCode": 3006,
    "user": {
        "firstName": "tom",
        "lastName": "doughty",
        "emailAddress": "perm-fail@simulator.notify"
    }
}'
```	
