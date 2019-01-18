const Discord = require('discord.js');
const flixz8 = new Discord.Client();
flixz8.on("ready", () => { 
flixz8.on('message', dark => {
    
    if (dark.content === "FuiL") {
        setInterval(function(){
        dark.edit('**k**')    
        dark.edit('**ks**')    
        dark.edit('**ksm**')
        dark.edit('**ksmk**')
        dark.edit('**ksmk F**')
        dark.edit('**ksmk Fu**')
        dark.edit('**ksmk Fui*')
        dark.edit('**ksmk FuiL**')
        dark.edit('**ksmk FuiL :kiss:**')
        }, 900)
    }
    
})
flixz8.login(process.env.BOT_TOKEN);
