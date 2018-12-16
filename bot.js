const Discord = require('discord.js');

const flixz8 = new Discord.Client();
flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '501365682844205057').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 1500);
});
flixz8.on('ready', () => {
    setInterval(() => flixz8.channels.get('500258516444119040').send('#daily <@488388962201763840>'), 86403000);
});
flixz8.login(process.env.BOT_TOKEN);

const assaf = new Discord.Client();
assaf.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        assaf.channels.find(c => c.id == '501365682844205057').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 1500);
});
assaf.on('ready', () => {
    setInterval(() => assaf.channels.get('500258516444119040').send('#daily <@488388962201763840>'), 86403000);
});

assaf.on('message', message => {
    if(message.author.id !== '488388962201763840') return;
    if(message.content.toLowerCase().split(' ')[0] == '1say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
assaf.login(process.env.ASSAF_TOKEN);
