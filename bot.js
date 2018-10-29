const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', message => {
    if (message.content === '.top') {
    	message.channel.send('topper');
  	}
    if (message.content === '.ping') {
    	message.channel.send('pong');
  	}
    if (message.content === '.avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.login(process.env.BOT_TOKEN);
