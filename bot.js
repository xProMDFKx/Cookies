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
 
     }
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
//BAN
if (message.content.toLowerCase().startsWith('-ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send("`Sorry, nu ai acces la aceasta comanda..`");
  if(!member) return message.channel.send("**Ai uitat sa mentionezi cui vrei sa ii dai Ban!**");
  if(!member.kickable)  return message.channel.send("`Aceasta persoana nu poate primi ban!`");
  if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru care ii dai Ban lui " + member.tag + " !`");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban : ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost banat de **${message.author.tag}** Motivul: ${reason}`);
}
 
});
 
client.login(process.env.BOT_TOKEN);
