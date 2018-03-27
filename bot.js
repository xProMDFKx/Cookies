const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

//SERVERINFO
if (message.content.startsWith(prefix / 'serverinfo')) {
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
client.login(NDI4MTgzNjM4MDk0NjQzMjAw.DZv__A.JoZ7RGdYhK3CwYhlh7lJrfcgje0);
