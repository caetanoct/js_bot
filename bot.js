const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', message => {
    if (message.content === '.guedes') {
    	message.channel.send('guedes escuta sertanejo e menospreza outros estilos musicais');
  	}
    if (message.content === '.top') {
    	message.channel.send('topper');
  	}
    if(message.content == ".ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
    if (message.content === '.avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.login(process.env.BOT_TOKEN);
