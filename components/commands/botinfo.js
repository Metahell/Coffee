const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'botinfo',
	description: 'Ping!',
	execute(message) {
		const exampleEmbed = new Discord.RichEmbed()
			.setColor('#1299ff')
			.setTitle('CoffeeBot - Statistics')
			.addField('Currently Serving', `${client.guilds.size} servers`, true)
			.addField('Serving', `${client.channels.size} customers`, true)
			// .addField(`Uptime ${client.uptime}`, true)
			// .addField('Currently Serving', `${client.guilds.size} servers`, true)
			.setTimestamp()
			.setFooter('Created by Metahell', 'https://i.imgur.com/Du2rw2b.png');

		message.channel.send({ embed: exampleEmbed });
	},
};
