const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Créé une invitation de serveur.'),
    async execute(interaction, config) {
        const channel = interaction.channel;

        const invite = await channel.createInvite({
            maxUses: 0,
            maxAge: 0,
            unique: false
        });

        const embed = new Discord.EmbedBuilder()
            .setTitle("\`✅\`〃Invitation créé")
            .setDescription(`> *Voici votre invitation du serveur \`${interaction.guild.name}\` pour le salon ${channel} :*\n ${invite.url}`)
            .setColor(config.color)
            .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};