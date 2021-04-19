const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "ban someone",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have enough perms to use this cmd!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new discord.MessageEmbed()
        .setTitle("Pomyslnie dano bana")
        .addField("Kto został zbanowany", target.user.tag)
        .addField("Kto dał bana", message.author.tag)
        .addField("Powód", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}
