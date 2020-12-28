const { Message } = require('discord.js');
const { rawEmb } = require('../index')

module.exports = {
    name: 'invite',
    syntax: 'invite',
    args: false,
    description: 'Get my Invite link here!',
    commands: ['invite', 'inv', 'link', 'support', 'vote'],

    /**
     *@document
     * @this
     * @param {Message} msg Nachricht in dem der Befehl geschickt wurde
     * @param {String[]} args Argumente die im Befehl mitgeliefert wurden
     */
    async execute(msg) {
        const { colors, emotes } = msg.client;

        let link = "https://discord.com/api/oauth2/authorize?client_id=" + msg.client.user.id + "&permissions=8&scope=bot",
            invite = "https://discord.gg/KJjZnxZ"

        let emb = rawEmb()
            .setTitle("Invite Links")
            .addField("**Bot-Invite**", `[Klick](${link})`)
            .addField("**Support Server**", `[Klick](${invite})`)
        msg.channel.send(emb);
    }
};