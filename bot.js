const Discord = require('discord.js');

const flixz8 = new Discord.Client();
flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 5000);
});
flixz8.login(process.env.BOT_TOKEN);

const assaf = new Discord.Client();
assaf.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        assaf.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 5000);
});
assaf.login(process.env.ASSAF_TOKEN);

const khaled = new Discord.Client();
khaled.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        khaled.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(800));
    }, 5000);
});
khaled.login(process.env.KHALED_TOKEN);
