const tokenfile = require("./token.json");
const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('سباام يولد يلعن اومم الفله')
          .then(m => {
            count++;
          })

        }
      }
});


cleint.login("NDc0ODg3MjE5Mzc5ODMwNzk1.DrcX2w.wm39DU3WcdBEPhhlNGbe9qLC_uE")
