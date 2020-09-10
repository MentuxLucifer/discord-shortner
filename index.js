const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: "everyone" });
client.login('');
client.website = require('./website/dashboard');
client.on("ready",() => {
    console.log(`${client.user.username} Logged In!`);
    client.user.setActivity(`Making A Video`)
    client.website.load(client);
})

const cryptoRandomString = require('crypto-random-string');


client.on("message", async (msg) => {
    if(msg.content.startsWith(`!shorten`)) {
      
        const prefix = "!"
        const args = msg.content.trim().split(/ +/g);
        let code = cryptoRandomString({length: 10, type: 'base64'});

        if(!args[1]) {
            return msg.channel.send(`Please Specify A URL To Shorten`);
        }

        const db = require('quick.db');

       let fetch = db.fetch(`${code}`);

        if(fetch !== null) {
            let code = cryptoRandomString({length: 10, type: 'base64'});
        }




        db.set(`${code}`, args[1]);

        msg.channel.send(`Shorten URL Is : http://localhost:8080/${code}`);
        
   } 
})
