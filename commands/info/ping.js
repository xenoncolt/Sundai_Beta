const Discord = require('discord.js');


module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gives you information on how fast the Bot can respond to you'),
    async execute(interaction) {
        await interaction.reply(`Slash is working!!!`);
    },
};