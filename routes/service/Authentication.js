const express = require("express");
const router = express.Router();

const uuid = require("uuid");
const PlatformType = require("../Shared/Enums");

router.get("/GetAuthToken", (req, res) =>
{

    // Yeni token oluştur ve kullanıcıya dön
    // Kullanıcının giriş bilgileri gelecek ve DB'den karşılaştırılıp token dönecek
    // Diğer metotlara erişmek için kullanıcı bu tokenı kullanmak zorunda olmalı.

    // Request class olmalı ve deserialize edilip burada kullanılmalı
    // Response class olmalı ve serialize edilip kullanıcıya dönmeli
    
    // TODO: Class olmalı ve oradan gelmeli
    let result = 
    {
        UserID: 0,
        Message: "",
        AuthToken: "",
        Result: false
    };

    let params;

    try
    {

        params = req.body;

        let username = params.Username;
        let password = params.Password;
        let platformType = params.PlatformType;

        if (!username || !password || !platformType)
        {

            console.log("FJDSJDS32873 Wrong login info");

            result.Message = "Wrong login info";
            
            return res.json(result); 

        }

        if (platformType === PlatformType.ANDROID ||
            platformType === PlatformType.IOS ||
            platformType === PlatformType.DESKTOP)
        {

            console.log("JFDSJF232332 Unsupported platform. Value: " + platformType);

            result.Message = "Unsupported platform";
 
            return res.json(result);
        }

        // TODO: get user info from DB

        // TODO: check if infos true

        // TODO: if true return JWT token

        // TODO: if false return error

        // TEST
        if (username === "erdogan.sireci" && password === "pentagon" && platformType === PlatformType.POSTMAN)
        {

            result.AuthToken = "12345Abc.";
            result.Result = true;
            result.UserID = 1
        }

    }
    catch (error)
    {
        // TODO: logger kodlanmalı
        console.log("JFDSJDJDFS32783278 Couldn't get AuthToken. Result: " + result + 
            "\nError: " + error + 
            "\nReq Body: " + JSON.stringify(req.body));
    }

    res.json(result);

});

module.exports = router;