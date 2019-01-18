const Discord = require('discord.js');
const flixz8 = new Discord.Client();

var sendMessages = false;

flixz8.on('ready', () => {
    console.log('ready.');
    setInterval(() => {
        if(sendMessages == false) return;
        flixz8.channels.get('532497653934718978').send('FKU BITCHS. <@!521341978659651596>');
    }, 500);
});

flixz8.on('message', message => {
if(message.author.id != '488388962201763840','515458477053706251') return;
    if(message.content == 'go') return sendMessages = true;
    if(message.content == 'stop') return sendMessages = false;
});

flixz8.login(process.env.BOT_TOKEN);
