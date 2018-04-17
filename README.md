# headquarters

HQ of the insurance-fraud

It's responsible for running 6 services:

1. merch-it
2. merch-it-api
3. acquire-it
4. acquire-it-api
5. issue-it
6. pcc

### merch-it

Port: 3000
React application for offering insurances to strangers.

### merch-it-api

Port: 3001
Ruby on Rails API responsible for storing and managing data about insurances.

### acquire-it

Port: 4000
React application for acquiring insurances payments.

### acquire-it-api

Port: 4001
Ruby on Rails API responsible for acquiring and managing data about insurances payments.

### issue-it

Port: 5000
Ruby on Rails API responsible for issuing payments, a bank.

### pcc

Port: 5001
Ruby on Rails API which represents Payment Card Center.
