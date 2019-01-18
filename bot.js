const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => { 
    console.log('ready.');
});

flixz8.on('message', async message => {
    if(message.content == 'kld') {
        message.channel.send('.').then(msg => {
            msg.edit('**ك**');
            await msg.edit('**كس**');
            await msg.edit('**كس ا**');
            await msg.edit('**كس ام**');
            await msg.edit('**كس امك**');
            await msg.edit('**كس امك ي**');
            await msg.edit('**كس امك يا**');
            await msg.edit('**كس امك يا خ**');
            await msg.edit('**كس امك يا خا**');
            await msg.edit('**كس امك يا خال**');
            await msg.edit('**كس امك يا خالد**');
        });
    }
});
flixz8.login(process.env.BOT_TOKEN);
