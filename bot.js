const { Discord, RichEmbed, Attachment} = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
var frasesDoGuedes = ["eu demorei 18 anos pra pegar meu primeiro onibus",
"escuto sertanejo toda hora pink floyd banda de viado, preto nao presta,  indio nao presta, o que presta é o pastor empresario trabalhadors",
"com medo da nova era petista?",
"eu voto no bolsonaro porque apoio o discurso de odio contra as minorias",
"chora esquerdalha",
"olha pra mim faço eng civil na udesc"];

function getRandomFrase(){
	var randomNumber = Math.floor(Math.random()*frasesDoGuedes.length);
	return frasesDoGuedes[randomNumber];	
}

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', message => {
    if (message.content === prefix+'guedes') {
    	message.channel.send(getRandomFrase());
  	}
    if (message.content === prefix+'top') {
    	message.channel.send('topper');
  	}
    if(message.content == prefix+'ping'){ // Check if message is "!ping"
	message.channel.send("Pinging ...") // Placeholder for pinging ... 
	.then((msg) => { // Resolve promise
		msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
		});
	}
    if (message.content === prefix+'avatar') {
	message.reply(message.author.avatarURL);
    	}
if (message.content === prefix+'imagem') {
        const attachment = new Attachment('https://i.imgur.com/lvhQano.jpg');
        message.channel.send(attachment);
    	}
if (message.content === 'embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('hahaha');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.login(process.env.BOT_TOKEN);
