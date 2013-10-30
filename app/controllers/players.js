var mongoose = require('mongoose'),
    async = require('async'),
    Player = mongoose.model('Player'),
    _ = require('underscore')

exports.show = function(req,res) {
  res.jsonp(req.league);
}

exports.player = function(req, res, next, id) {
  var Player = mongoose.model('Player');

  Player.load(id, function(err,player) {
    if (err) return next(err)
    if (!player) return next(new Error('Failed to load player' + id))
    req.player = player
    next()
  })
}

exports.all = function(req, res) {
  Player.find(function(err, players) {
    if (err) {
      res.render('error', { status: 500 });
    } else {
      res.jsonp(players);
    }
  });
}