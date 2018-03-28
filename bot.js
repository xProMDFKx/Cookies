const Discord = require('discord.js');
const client = new Discord.Client();

//CLEAR
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
}
});
    
client.on('message', message => {
    if (message.content === '/help') {
    	message.reply('***Creatorul meu este _xProMDFKx_#0957.Eu sunt creat pentru a modera servere de discord.Comenzile mele ! : /ban, /kick, /reload, /help, /forum  ***');
}
});

client.on('message', message => {
    if (message.content === '/reload') {
    	message.reply('***RELOADIND CONFIG!! :ok_hand: DONE! ***');
}
});

client.on('message', message => {
    if (message.content === '/forum') {
    	message.reply('Forumul nostru este ***cookies-network.org***');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
