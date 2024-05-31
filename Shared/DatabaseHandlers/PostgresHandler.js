const pg = require("pg");

let config = { // TODO: .env dosyasından gelmeli
    user: 'postgres',
    password: '36503650',
    host: 'localhost',
    port: 5432,
    database: 'UserAuthDemo',
  };

const client = new pg.Client(config);

const quote = "\"";

async function Connect()
{
    await client.connect();
}

async function Disconnect()
{
    await client.end();
}

async function GetUsernamePasswordQuery()
{
    return new Promise((resolve, reject) => 
        {
            try
            {
                let response = client.query("SELECT username, password from public.\"user\"");

                if (response.rowCount > 1)
                {
                    console.log("FHDSHDJFD8737832 Found more than one user in DB");
                    throw new Error("Found more than one user in DB");
                }

                resolve(response);

            }
            catch(err)
            {
                reject(err);
            }
        });
}

module.exports = { Connect, Disconnect, GetUsernamePasswordQuery };
