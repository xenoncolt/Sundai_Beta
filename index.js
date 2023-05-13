const Discord = require('discord.js');
const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
const { prefix, allowedUserId } = require('./config/config.json');



// New client instance
const client = new Discord.Client({ 
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
    ] 
});



// Use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Discord.Events.ClientReady, client => {
    console.log(`${client.user.tag} is now Online...`);
});




// Execute cmd
client.on(Discord.Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error while executing this command!', ephemeral: true
            });
        } else {
            await interaction.reply({
                content: 'There was an error while executing this command!', ephemeral: true
            });
        }
    }
});




client.commands = new Discord.Collection();

// building cmd handlers 
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
    
        //set a new item in the collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`Error: Command File at ${filePath} is Missing Data Or Execute Function`);
        }
    }
    
}



//testSlash import 
const testSlash = require('./testslash.js');

client.on('message', async (message) => {
    // If the message starts with the prefix and says ".deployslash", deploy the command
    if (!message.content.startsWith(prefix) || message.author.id !== allowedUserId) {
        console.log(error)
        return;
    }

    if (message.content.endsWith('testslash')) {
        await testSlash(message);
    }
});






dotenv.config();
client.login(process.env.TOKEN);