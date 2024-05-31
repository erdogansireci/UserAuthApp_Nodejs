const PlatformType = require("../../Shared/Enums");
const postgres = require("../DatabaseHandlers/PostgresHandler");

async function GetAuthToken(params)
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

        let username = params.Username;
        let password = params.Password;
        let platformType = params.PlatformType;

        if (!username || !password || !platformType)
        {

            console.log("FJDSJDS32873 Wrong login info");

            result.Message = "Wrong login info";
            
            return result; 

        }

        if (platformType === PlatformType.ANDROID ||
            platformType === PlatformType.IOS ||
            platformType === PlatformType.DESKTOP)
        {

            console.log("JFDSJF232332 Unsupported platform. Value: " + platformType);

            result.Message = "Unsupported platform";
 
            return result;
        }

        // get user info from DB
        await postgres.Connect(); // TODO: should be db.connect and handle automatically which db
        let response = await postgres.GetUsernamePasswordQuery();
        await postgres.Disconnect();
        
        let dbUsername = response.rows[0].username;
        let dbPassword = response.rows[0].password;

        // check if credentials true
        if (username === dbUsername && password === dbPassword)
        {
            result.AuthToken = "12345Abc."; // TODO: create JWT
            result.Result = true;
            result.UserID = 1;
        }
        else
        {
            result.Message = "Username or Password is wrong!";
        }

    }
    catch (error)
    {
        // TODO: logger kodlanmalı
        console.log("JFDSJDJDFS32783278 Error on GetAuthToken method" + 
            "\nResult: " + result + 
            "\nError: " + error + 
            "\nParams: " + JSON.stringify(params));
    }

    return result;

}

module.exports = {GetAuthToken};