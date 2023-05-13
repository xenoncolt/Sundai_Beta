const Discord = require('discord.js');



module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('weather')
        .setDescription('This is a test cmd'),
    async execute(interaction) {
        await interaction.reply(`Slash is working!!!`);
    },
};