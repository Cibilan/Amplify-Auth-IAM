/* Amplify Params - DO NOT EDIT
	API_TESTGRAPQL_GRAPHQLAPIENDPOINTOUTPUT
	API_TESTGRAPQL_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

//const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const axios = require('axios');
const appsyncUrl = process.env.API_TESTGRAPQL_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require('./query.js').query;
const apiKey = process.env.API_KEY;

exports.handler = async (event) => {

    
console.log(JSON.stringify(event, null, 2));
    const req = new AWS.HttpRequest(appsyncUrl, region);

    console.log(AWS.config);

    const item = {
        input: {
            name: "Lambda Item",
            description: "Item Generated from Lambda"
        }
    };

    req.method = "POST";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: graphqlQuery,
        operationName: "ListTodos"
    });
    console.log(req.headers);
    if (apiKey) {
        req.headers["x-api-key"] = apiKey;
    } else {
        const signer = new AWS.Signers.V4(req, "appsync", true);
        signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }
    console.log(req.headers);
    // const data = await new Promise((resolve, reject) => {
    //     const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
    //         result.on('data', (data) => {
    //             resolve(JSON.parse(data.toString()));
    //         });
    //     });
    //     httpRequest.write(req.body);
    //     httpRequest.end();
    // });

       const data = await axios({
          method: 'post',
          url: appsyncUrl,
          data: req.body,
          headers: req.headers
      });
      let list = data.data.data.listTodos.items;
    console.log(data.data.data.listTodos.items);
    return {
        statusCode: 200,
        body: list
    };
};
