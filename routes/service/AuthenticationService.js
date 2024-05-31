const express = require("express");
const router = express.Router();

const authHandler = require("../../Shared/ServiceRequestHandlers/AuthenticationHandlers");

router.get("/GetAuthToken", async (request, response) =>
{
    try
    {

        // Handle request
        let result = await authHandler.GetAuthToken(request.body);
        response.json(result);

    }
    catch (error)
    {
        console.log("FJDSJFSJFSJ73323223 Error on Servive /GetAuthToken" +
            "\nError: " + error +
            "\nReq Body: " + JSON.stringify(request.body));

            //send internal error
            response.sendStatus(500);

    }

});

module.exports = router;