const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Ping!',
	execute(message) {
		const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('CoffeeBot - Invite')
			.setURL('https://discord.js.org/')
			.setTitle('CoffeeBot - Invite')
			.setURL('https://discord.js.org/')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		message.channel.send({ embed: exampleEmbed });
	},
};
