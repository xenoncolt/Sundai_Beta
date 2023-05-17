const Discord = require('discord.js');
const wait = require(`node:timers/promises`).setTimeout;

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gives you information on how fast the Bot can respond to you'),
    execute: async (interaction) => {
        await interaction.deferReply({ ephemeral: true });
        await wait(2000);
        await interaction.editReply(`🤖Bot ping : ${interaction.client.ws.ping}ms`);
    },
};