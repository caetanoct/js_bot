const Discord = require('discord.js');
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
	if(message.content === prefix+'comandos'){
		var stringSaida = "Comandos disponíveis:\n.guedes \n.top\n.ping\n.avatar\n.img"
		message.channel.send(stringSaida);
	}
	if(message.content === prefix+'img'){
		message.channel.send("Uma imagem:",{
			files: ['https://i.imgur.com/nyljaMX.png']
		  })
	}
});
client.login(process.env.BOT_TOKEN);
