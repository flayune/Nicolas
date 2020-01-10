const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "!";

client.login("NjY1MTMyNzkzNTk2MDg0MjI3.XhhMgw.ccWz5E2LnAcIRFL-DCdnnyngthk");

client.on("message", message =>{
if(!message.guild) return
if(message.content === prefix + "hello"){
    message.channel.send("bonjour !" + message.author + " !")
   } 
});

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("664749710308933632").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " !")
});
client.on("guildMemberRemove", user =>{
user.guild.channels.get("664749710308933632").send("Sniff..." + user.user.username + " a quitter le serveur ")
})

