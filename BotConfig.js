//If you wanna add dotenv to it


require('dotenv').config();

module.exports = {
  attConfig: {
   clientId: process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   scope: [ 'ws.group', 'ws.group_members', 'ws.group_servers', 'ws.group_bans', 'ws.group_invites', 'group.info', 'group.join', 'group.leave', 'group.view', 'group.members', 'group.invite', 'server.view', 'server.console'],
   logVerbosity: 2
  }
}