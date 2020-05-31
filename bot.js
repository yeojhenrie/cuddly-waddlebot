/ Run dotenv
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.DISCORD_TOKEN);
client.on('message', msg => {
  if (msg.content.includes("fuck")) {
    msg.reply('Fuck You!');
  } else if (msg.content.includes("you just advanced to level")) {
    msg.reply('Fuck You!');
  }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
