const express = require("express");
const router = express.Router();

const uuid = require("uuid");

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

    try
    {

        let params = JSON.parse(req.body);

        let username = params.username;
        let password = params.password;
        let platformType = params.platformType;

        if (!username || !password || !platformType)
        {

            console.log("FJDSJDS32873 Giriş bilgilerinde hata");

            result.Message = "Giriş bilgilerinde hata";
            
            return res.json(result); 

        }

        if (platformType === PlatformType.ANDROID ||
            platformType === PlatformType.IOS ||
            platformType === PlatformType.DESKTOP)
        {

            console.log("JFDSJF232332 Desteklenmeyen platform. Değer: " + platformType);

            result.Message = "Desteklenmeyen platform";
 
            return res.json(result);
        }

        // TODO: get user info from DB

        // TODO: check if infos true

        // TODO: if true return JWT token

        // TODO: if false return error

    }
    catch (error)
    {
        // TODO: logger kodlanmalı
        console.log("JFDSJDJDFS32783278 GetAuthToken'da hata. Result: " + result + 
            "\nError: " + error);
    }

    res.json(result);

});