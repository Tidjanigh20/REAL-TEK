const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("610487361314488341")
setInterval(function() {
channel.send(`Tidjani fsdagsd s af adg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);