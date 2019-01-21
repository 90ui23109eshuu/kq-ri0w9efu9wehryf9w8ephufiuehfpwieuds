const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('message', message => {
    if(message.author.id != flixz8.user.id) return;
    if(message.content == '3clear') {
        message.delete();
        message.channel.messages.filter(m => m.author.id == flixz8.user.id).forEach(m => m.delete());
    }
});

flixz8.login(process.env.BOT_TOKEN);
