const Discord = require('discord.js');
const moment = require('moment');
const prefix = "/";


module.exports = {
    name: Discord.Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        try {

                    console.table({
                      'Bot User:': `${client.user.tag}`,
                      'Guild(s):': `${client.guilds.cache.size} Servers`,
                      'Watching:': `${client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0)} Members`,
                      'Prefix:': `${prefix}`,
                      'Commands:': `${client.commands.size}`,
                      'Discord.js:': `v${Discord.version}`,
                      'Node.js:': `${process.version}`,
                      'Plattform:': `${process.platform} ${process.arch}`,
                      'Memory:': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`
                    });

                
                    // change_status(client);
                    // //loop through the status per each 10 minutes
                    // setInterval(() => {
                    //   change_status(client);
                    // }, 90 * 1000);
                
                  } catch (error) {
                    console.log(String(error.stack));
                  }
    }
}


// module.exports = client => {
//     try {
//         try {
//           const stringlength = 69;
//           console.log("\n")
//           console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
//           console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
//           console.log(`     ┃ `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `Discord Bot is online!`.length) + "┃".bold.brightGreen)
//           console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - ` /--/ ${client.user.tag} /--/ `.length) + "┃".bold.brightGreen)
//           console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
//           console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
//         } catch { /* */ }
    
//         console.table({
//           'Bot User:': `${client.user.tag}`,
//           'Guild(s):': `${client.guilds.cache.size} Servers`,
//           'Watching:': `${client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0)} Members`,
//           'Prefix:': `${config.prefix}`,
//           'Commands:': `${client.commands.size}`,
//           'Discord.js:': `v${Discord.version}`,
//           'Node.js:': `${process.version}`,
//           'Plattform:': `${process.platform} ${process.arch}`,
//           'Memory:': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`
//         });
    
//         change_status(client);
//         //loop through the status per each 10 minutes
//         setInterval(() => {
//           change_status(client);
//         }, 90 * 1000);
    
//       } catch (e) {
//         console.log(String(e.stack).grey.bgRed)
//       }
    
// }