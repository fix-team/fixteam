const Discord = require('discord.js');
const robot = new Discord.Client();
const prefix = "ft ";
robot.login(process.env.BOT_TOKEN);
robot.on('message', function(message) {
    if (message.author.equals(robot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "game":
            message.channel.sendMessage("AZA");
            message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);    
            break;
        case "clear":
            message.channel.fetchMessages()
            .then(function(list){
            message.channel.bulkDelete(list);
            });    
            break;
        case "random":
            var roll = Math.floor(Math.random() * 100) + 1;
            message.channel.sendMessage("Ты зарандомил цифру " + roll);
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .setDescription("BOT by fixteam")
                .addField("E-mail: fix-team@mail.ru","Thanks for using!!!")
                .setColor(0x00FFFF);
                message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Такой команды не существует");
    }
});
