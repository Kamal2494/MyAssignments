"use strict";
class APIClient {
    // Implementation
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log("The endpoint, request body, and request status are present");
            console.log("Endpoint:", endpoint);
            console.log("Request Body:", requestBody);
            console.log("Request Status:", requestStatus);
        }
        else {
            console.log("The endpoint is only present");
            console.log("Endpoint:", endpoint);
        }
    }
}
// Create an object of APIClient
let apiVar = new APIClient();
// Calling the first overloaded method
apiVar.sendRequest("Testapiendpoint");
// Calling the second overloaded method
apiVar.sendRequest("test", "body", true);
