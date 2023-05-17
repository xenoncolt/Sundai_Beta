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
                      'Bot Ping:' : `${client.ws.ping}ms`,
                      'Memory:': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`
                    });

                    
                    change_status(client);
                    //loop through the status per each 10 minutes
                    setInterval(() => {
                      change_status(client);
                    }, 90 * 1000);
                
                  } catch (error) {
                    console.log(String(error.stack));
                  }
    }
}


var state = false;
function change_status(client) {
  const config = require(`../config/status.json`)
  if (!state) {
    client.user.setActivity(`${config.status.text}`
      .replace("{prefix}", prefix)
      .replace("{guildcount}", nFormatter(client.guilds.cache.size, 2))
      .replace("{membercount}", nFormatter(client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0), 2))
      .replace("{created}", moment(client.user.createdTimestamp).format("DD/MM/YYYY"))
      .replace("{createdime}", moment(client.user.createdTimestamp).format("HH:mm:ss"))
      .replace("{name}", client.user.username)
      .replace("{tag}", client.user.tag)
      .replace("{commands}", client.commands.size)
      , { type: config.status.type, url: config.url });
  } else {
    client.user.setActivity(`${config.status2.text}`
      .replace("{prefix}", prefix)
      .replace("{guildcount}", nFormatter(client.guilds.cache.size, 2))
      .replace("{membercount}", nFormatter(client.guilds.cache.reduce((a, b) => a + b?.memberCount, 0), 2))
      .replace("{created}", moment(client.user.createdTimestamp).format("DD/MM/YYYY"))
      .replace("{createdime}", moment(client.user.createdTimestamp).format("HH:mm:ss"))
      .replace("{name}", client.user.username)
      .replace("{tag}", client.user.tag)
      .replace("{commands}", client.commands.size)
      , { type: config.status2.type, url: config.url });
  }
  state = !state;
}


function nFormatter(num, digits = 2) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
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