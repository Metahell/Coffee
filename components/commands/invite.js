const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Ping!',
	execute(message) {
		const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('CoffeeBot - Support Server')
			.setURL('https://discord.gg/NKn2nqQ');

		message.channel.send({ embed: exampleEmbed });
	},
};
