const Discord = require('discord.js');
const robot = new Discord.Client();
const prefix = "ft ";
robot.login(process.env.BOT_TOKEN);
robot.on('message', function(message) {
    if (message.author.equals(robot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "test":
            message.channel.sendMessage("Тест - УСПЕШНО");
            break;
        case "game":
            var avtor = new Discord.Message.content.author();
            message.channel.sendMessage(avtor);
            break;
        case "рандом":
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
