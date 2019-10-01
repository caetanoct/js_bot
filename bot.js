const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
var frasesDoGuedes = ["eu demorei 18 anos pra pegar meu primeiro onibus",
"escuto sertanejo toda hora pink floyd banda de viado, preto nao presta,  indio nao presta, o que presta é o pastor empresario trabalhadors",
"eu parei de assistir american crime story pq tem gays",
"eu votei no bolsonaro só porque apoio o discurso de odio contra as minorias fodase",
"chora esquerdalha, to afim de viver um estilo de vida minimalista",
"olha pra mim faço eng civil na udesc e tenho um apple watch"];
var perguntaFlag = false;
var perguntas = [
	"1.Qual é o seu maior sonho?",
	"2.Qual é o seu livro ou filme preferido e o que nele mais chamou a sua atenção?",
	"3.Qual foi o acontecimento da sua vida que mais te marcou?",
	"4.Você se considera uma pessoa feliz?",
	"5.Qual era a sua profissão dos sonhos na infância?",
	"6.Quando está sozinho (a) em casa sente liberdade ou solidão?",
	"7.Se encontrasse uma mala de dinheiro em um local abandonado, entregaria para a polícia ou acredita no ditado – achado não é roubado?",
	"8.Você prefere o dia ou a noite?",
	"9.Se você pudesse ter uma conversa com qualquer pessoa, incluindo aquelas já falecidas, quem seria?",
	"10.Se soubesse que tem apenas mais um dia de vida, o que faria?",
	"11.Como escolheu a sua profissão? Se pudesse voltar no tempo acredita que faria a mesma escolha?",
	"12.Para você, o que é o sucesso?",
	"13.Quais são os pontos da sua personalidade que você acredita que precisem ser melhorados?"]
var respostas = [
	perguntas[0]+"\nGuedes: Trabalhar como imagineer na disney",		
	perguntas[1]+"\nGuedes: Gran Torino, pois lembra o meu avô e também tem o Clint Eastwood",
	perguntas[2]+"\nGuedes: Nascimento do meu irmão",
	perguntas[3]+"\nGuedes: Muito feliz",
	perguntas[4]+"\nGuedes: Medicina",
	perguntas[5]+"\nGuedes: Liberdade",
	perguntas[6]+"\nGuedes: Ficaria para mim",
	perguntas[7]+"\nGuedes: Dia",
	perguntas[8]+"\nGuedes: Clint Eastwood",
	perguntas[9]+"\nGuedes: Passaria o dia com o meu irmão",
	perguntas[10]+"\nGuedes: Era um curso de graça na udesc",
	perguntas[11]+"\nGuedes: Conquista da Cisplatina em 1817",
	perguntas[12]+"\nGuedes: Nenhum"];
function getRandomFrase(){
	var randomNumber = Math.floor(Math.random()*frasesDoGuedes.length);
	return frasesDoGuedes[randomNumber];	
}

client.on('ready', () => {
    console.log('ready!');
});
var perguntasEmString = "";
for(i = 0 ; i < perguntas.length; i++) {
	perguntasEmString += perguntas[i]+"\n";
}

client.on('message', message => {
    if (message.content === prefix+'guedes') {
    	message.channel.send(getRandomFrase());
  	}
    if (message.content === prefix+'say') {
	let stringSaida = message.content.split(" ");
	var variavelSaida = "";
	var i;
	for (i = 1; i < stringSaida.length; i++) {
  		variavelSaida += stringSaida[i] + " ";
	}
    	message.channel.send(variavelSaida);
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
		var stringSaida = "Comandos disponíveis:\n.guedes \n.top\n.ping\n.avatar\n.img\n.querosabermaissobreguedes\n.comandos\n.guedesepolitica\n.loren"
		message.channel.send(stringSaida);
	}
	if(message.content === prefix+'guedesepolitica'){
		message.channel.send("Guedes define sua posição política como conservador de direita neoliberal anarco-capitalista.");
	}
	if(message.content === prefix+'loren'){
		message.channel.send("oi loren");
	}
	if(message.content === prefix+'img'){
		message.channel.send("Uma imagem do guedes fazendo cosplay de anime:",{
			files: ['https://i.imgur.com/wvgQ21T.jpg']
		  })
	}
	if(message.content === prefix+'querosabermaissobreguedes'){
		message.channel.send(perguntasEmString+ "\nDigite o item que deseja obter uma resposta sobre Guedes");
		perguntaFlag = true;
	}
	if(message.content === prefix+'ss'){
		message.channel.send({embed: {
			color: 3447003,
			description: "vai se fode"
		  }});
	}
	if (message.content === prefix+'burp') {
    		message.channel.send("vou fumar maconha");
  	}
	if(perguntaFlag == true){

		switch(message.content){
			case '1':
			message.channel.send(respostas[0]);
			perguntaFlag = false;
			break;
			case '2':
			message.channel.send(respostas[1]);
			perguntaFlag = false;
			break;
			case '3':
			message.channel.send(respostas[2]);
			perguntaFlag = false;
			break;
			case '4':
			message.channel.send(respostas[3]);
			perguntaFlag = false;
			break;
			case '5':
			message.channel.send(respostas[4]);
			perguntaFlag = false;
			break;
			case '6':
			message.channel.send(respostas[5]);
			perguntaFlag = false;
			break;
			case '7':
			message.channel.send(respostas[6]);
			perguntaFlag = false;
			break;
			case '8':
			message.channel.send(respostas[7]);
			perguntaFlag = false;
			break;
			case '9':
			message.channel.send(respostas[8]);
			perguntaFlag = false;
			break;
			case '10':
			message.channel.send(respostas[9]);
			perguntaFlag = false;
			break;
			case '11':
			message.channel.send(respostas[10]);
			perguntaFlag = false;
			break;
			case '12':
			message.channel.send(respostas[11]);
			perguntaFlag = false;
			break;
			case '13':
			message.channel.send(respostas[12]);
			perguntaFlag = false;
			break;

		}
	}
});
client.login(process.env.BOT_TOKEN);
