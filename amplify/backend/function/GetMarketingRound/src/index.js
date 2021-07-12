/* Amplify Params - DO NOT EDIT
	API_STANDARDAPI_GRAPHQLAPIIDOUTPUT
	API_STANDARDAPI_STANDARDTABLE_ARN
	API_STANDARDAPI_STANDARDTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
