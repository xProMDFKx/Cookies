const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
const prefix = "/"
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
    
//SAY
  if(message.content.startsWith(prefix + "say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
//SERVERINFO
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(`ff0000`)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
  
  }
client.on('message', msg => {
  if (msg.content === '/reload') {
    msg.channel.send('***RELOADIND CONFIG!! :ok_hand: DONE! ***');
    
  }
client.on('message', msg => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));   
    
  }
client.on('message', msg => {
  if (msg.content === '/help') {
    msg.channel.send('***Creatorul meu este _xProMDFKx_#0957.Eu sunt creat pentru a modera servere de discord.Comenzile mele ! : /ban, /kick, /reload, /help, /forum  ***');
    
  }
client.on('message', msg => {
  if (msg.content === '/forum') {
    msg.channel.send('Forumul nostru este ***cookies-network.org***');
  }
});
 
client.login(process.env.BOT_TOKEN);
