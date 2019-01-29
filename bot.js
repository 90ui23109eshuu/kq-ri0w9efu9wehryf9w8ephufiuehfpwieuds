const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('message', message => {
    if(message.author.id !== flixz8.user.id) return;
    var words = ["كسمك","قحبة","خنيث","منيوك"];
    if(words.some(word => message.content.includes(word))) {
        message.edit('استغفر الله .');
    }
});

flixz8.login(process.env.BOT_TOKEN);
