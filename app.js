require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');

// Init
const client = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = '.';

client.on('ready', () => {
	console.log('Ready!');
	client.user.setActivity('.help || .invite');
});

function onReady() {
	console.log(`Bot ${client.user.username} has logged in.`);
}

const commandFiles = fs.readdirSync('./components/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./components/commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {

	const swearWords = ['darn', 'shucks', 'frak', 'shite'];
	if(swearWords.some(word => message.content.includes(word))) {
		message.reply('Please keep the chat clear from this nonsense!');
		message.delete();
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Discord
client.login(process.env.BOT_TOKEN);
client.once('Bot is ready', onReady);

module.exports = client;