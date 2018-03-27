const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    
//SERVERINFO
client.on('message', message => {
    if (message.content === 'ping') {
    const embed = new Discord.RichEmbed()
    embed.addField('Membrii', message.guild.memberCount, true)
    embed.addField('Nume', message.guild.name, true)
    embed.addField('Regiunie', message.guild.region, true)
    embed.addField('Fondator', message.guild.owner, true)
    embed.addField('ID', message.guild.id, true)
    embed.setColor(`ff0000`)
    embed.setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
