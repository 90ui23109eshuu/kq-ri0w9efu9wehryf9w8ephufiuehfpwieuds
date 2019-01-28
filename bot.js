const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["78689769876","Fucku","ShutUpNiggA","iM7668976876","NiggaS","NoMerrCy-Nigga","As68768976","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '527030852803100672').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1500));
    }, 50000);
});

flixz8.on('ready', () => {
    setInterval(() => flixz8.channels.get('527030852803100672').send('#daily <@488388962201763840>'), 86400100);
});

flixz8.login(process.env.BOT_TOKEN);
