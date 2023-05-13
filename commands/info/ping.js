const Discord = require('discord.js');


module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gives you information on how fast the Bot can respond to you'),
    async execute(interaction, client) {
        await interaction.reply(`${interaction.client.user.tag} is working!!!`);
    },
};