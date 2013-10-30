var async = require('async')

module.exports = function (app, passport, auth) {
  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  app.param('userId', users.user)

  // league routes
  var leagues = require('../app/controllers/leagues')
  app.get('/leagues', leagues.all)
  app.post('/leagues', auth.requiresLogin, leagues.create)
  app.get('/leagues/:leagueId', leagues.show)
  app.put('/leagues/:leagueId', auth.requiresLogin, leagues.update)
  app.del('/leagues/:leagueId', auth.requiresLogin, leagues.destroy)
  app.param('leagueId', leagues.league)

  // fantasy team routes
  var fantasyteams = require('../app/controllers/fantasyteams')
  app.get('/fantasyteams', fantasyteams.all)
  app.post('/fantasyteams', auth.requiresLogin, fantasyteams.create)
  app.get('/fantasyteams/:fantasyTeamId', fantasyteams.show)
  app.put('/fantasyteams/:fantasyTeamId', auth.requiresLogin, fantasyteams.update)
  app.del('/fantasyteams/:fantasyTeamId', auth.requiresLogin, fantasyteams.destroy)
  app.param('fantasyTeamId', fantasyteams.fantasyteam)

  // player routes
  var players = require('../app/controllers/players')
  app.get('/players', players.all)
  app.get('/players/:playerId', players.show)
  app.param('playerId', players.player)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)
}
