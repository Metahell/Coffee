require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const botName = 'Coffee';

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login(process.env.BOT_TOKEN).then(function() {
	console.log('%s logged in.', botName);
}).catch(console.log);