const Discord = require('discord.js');



module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('kick')
        .setDescription('kick test commands'),
    async execute(interaction) {
        await interaction.reply(`Slash is working!!!`);
    },
};