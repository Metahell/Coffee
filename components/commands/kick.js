const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'kick',
	description: 'Ping!',
	execute(message) {
		const modRole = message.guild.roles.find('name', 'Commander');
		if(!message.member.roles.has(modRole)) {
			return message.reply('you dont have the permission to use this command');
		}
		if(message.mentions.users.size === 0) {
			return message.reply('Please mention a user to kick!');
		}

		const kickMember = message.guild.member(message.mentions.users.first());
		if(!kickMember) {
			return message.reply('That user is not valid');
		}
		if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
			return message.reply('I dont have the permission to {KICK_MEMBER} to do this.');
		}
		kickMember.kick().then(member => {
			message.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
		}).catch(console.error);
	},
};
