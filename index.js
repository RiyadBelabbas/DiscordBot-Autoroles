const { Client, Intents, MessageEmbed } = require('discord.js');

// Remplace par ton token et ton ID de serveur
const TOKEN = 'TON_TOKEN_ICI';
const SERVER_ID = 'TON_SERVER_ID_ICI';
const ROLES_AUTOMATIQUES = ['ROLE_ID_1', 'ROLE_ID_2']; // Remplace par les IDs des rôles automatiques
const ROLE_REGLEMENT = 'ROLE_ID_REGLEMENT'; // Rôle à retirer
const ROLE_MEMBRE = 'ROLE_ID_MEMBRE'; // Rôle à attribuer après validation du règlement

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

// Quand un membre rejoint le serveur
client.on('guildMemberAdd', async (member) => {
  const guild = member.guild;

  // Assigne les rôles automatiques
  ROLES_AUTOMATIQUES.forEach(async (roleId) => {
    const role = guild.roles.cache.get(roleId);
    if (role) {
      await member.roles.add(role).catch(console.error);
    }
  });

  // Envoie un embed de bienvenue
  const welcomeChannel = guild.systemChannel; // Remplace par un ID spécifique si besoin
  if (welcomeChannel) {
    const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle('Bienvenue sur le serveur !')
      .setDescription(
        `Salut ${member}, bienvenue sur **${guild.name}** !\n` +
        `Merci de lire et d'accepter le règlement pour accéder au reste du serveur.`
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter('Bon séjour !');

    welcomeChannel.send({ content: `${member}`, embeds: [embed] });
  }
});

// Quand une réaction est ajoutée au règlement
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.channelId === 'ID_CANAL_REGLEMENT' && reaction.emoji.name === '✅') {
    const member = reaction.message.guild.members.cache.get(user.id);

    if (member) {
      // Retire le rôle du règlement
      const reglementRole = member.roles.cache.get(ROLE_REGLEMENT);
      if (reglementRole) {
        await member.roles.remove(ROLE_REGLEMENT).catch(console.error);
      }

      // Ajoute le rôle de membre
      const membreRole = member.guild.roles.cache.get(ROLE_MEMBRE);
      if (membreRole) {
        await member.roles.add(ROLE_MEMBRE).catch(console.error);
      }
    }
  }
});

// Connecte le bot
client.login(TOKEN);
