const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["87987","ijdojsdosij","ShutUpNiggA","iLovey","NiggauS","NoMerrCy-Nigga","Assaf-uH","iLovepunur","i96578657865","i867567578","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '527030852803100672').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});

flixz8.login('process.env.BOT_TOKEN');
