const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const { clientId, guildId } = require('./config/config.json');
const dotenv = require('dotenv');


const commands = [];
// Grab all the command files from the commands dir you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands dir you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

dotenv.config();
//console.log(process.env.TOKEN);
// Construct and prepare an instance of the REST module
const rest = new Discord.REST().setToken(process.env.TOKEN);


// Export a function that deploys the commands when called
module.exports = async (message) => {
    try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);
  
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands },
      );
  
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  
      // Send a success message in the same channel where the command was invoked
      message.channel.send(`Successfully deployed ${data.length} application (/) commands!`);
    } catch (error) {
      // Send an error message in the same channel where the command was invoked
      message.channel.send(`Error while deploying application (/) commands: ${error.message}`);
      console.error(error);
    }
  };