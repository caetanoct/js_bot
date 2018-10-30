
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
  console.log('I am ready2');
});

client.on('message', message => {
  if (message.content === prefix+'ping') {
    message.channel.send('pong');
  }
	if (message.content === prefix+'guedes') {
    	message.channel.send(getRandomFrase());
  	}
    if (message.content === prefix+'top') {
    	message.channel.send('topper');
  	}
   
    if (message.content === prefix+'avatar') {
	message.reply(message.author.avatarURL);
    	}
});


client.login(process.env.BOT_TOKEN);
