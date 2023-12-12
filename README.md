#serverless lambda

 step 1: we need serveless package 
 
step 2 : we need to connect the app to aws lambda by this serverless config credentials --provider aws –key (and we need accesses key an security key)

step 3 : -create templet for the language you want (serverless create -t aws-nodejs)

step 4 : remmber to remove any server listen from app.js

step 5: edite yml file like this 

service: server-vercel
frameworkVersion: "3"

provider:
  name: aws
  runtime: nodejs18.x
  stage: dev
  timeout: 15
  region: us-east-1 
  memorySize: 2048



functions:
  hello:
    handler: handler.hello
    events:
      - http: ANY /{proxy+}
      - http: ANY /
    environment:
      MONGO_URL: mongodb://Mashael-aljaafari:<password>@ac-whdx6z2-shard-00-00.2kg4kex.mongodb.net:27017,ac-whdx6z2-shard-00-01.2kg4kex.mongodb.net:27017,ac-whdx6z2-shard-00-02.2kg4kex.mongodb.net:27017/awsDB?ssl=true&replicaSet=atlas-p8f6zt-shard-0&authSource=admin&retryWrites=true&w=majority


      
 step 6 :edit the handeler file 
 
'use strict';
const serverless=require('http-serverless');
const app = require('./app');

// this function genarated fronm lembda to run our API
module.exports.hello = serverless(app)

step 7: add one script to the package .json

"deploy": "serverless deploy",
And to run this command we need to use npm run deploy
