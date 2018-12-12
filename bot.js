const Discord = require('discord.js');

const flixz8 = new Discord.Client();
flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
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
        assaf.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 1500);
});
assaf.on('ready', () => {
    setInterval(() => assaf.channels.get('500258516444119040').send('#daily <@488388962201763840>'), 86403000);
});
assaf.login(process.env.ASSAF_TOKEN);
