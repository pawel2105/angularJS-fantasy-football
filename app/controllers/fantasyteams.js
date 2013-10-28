var mongoose = require('mongoose'),
    async = require('async'),
    FantasyTeam = mongoose.model('FantasyTeam'),
    _ = require('underscore');

exports.create = function(req,res) {
  var fantasyteam = new FantasyTeam(req.body);
  fantasyteam.owner = req.user
  fantasyteam.league = req.body.league
  fantasyteam.save()
  res.jsonp(fantasyteam)
}

exports.show = function(req,res) {
  res.jsonp(req.fantasyteam);
}

exports.fantasyteam = function(req, res, next, id) {
  var FantasyTeam = mongoose.model('FantasyTeam')
  FantasyTeam.load(id, function(err, fantasyteam) {
    if (err) return next(err)
    if (!fantasyteam) return next(new Error('Failed to load fantasy team' + id))
    req.fantasyteam = fantasyteam
    next()
  })
}

exports.all = function(req,res) {
  FantasyTeam.find().populate('owner').populate('league').exec(function(err, fantasyteams) {
    if (err) {
      res.render('error', { status: 500 });
    } else {
      res.jsonp(fantasyteams);
    }
  })
}

exports.update = function(req,res) {
  var fantasyteam = req.fantasyteam;
  fantasyteam = _.extend(fantasyteam, req.body)
  fantasyteam.save(function(err) {
    res.jsonp(fantasyteam);
  })
}

exports.destroy = function(req,res) {
  var fantasyteam = req.fantasyteam;
  fantasyteam.remove(function(err) {
    if (err) {
      res.render('error', { status: 500 });
    } else {
      res.jsonp(1);
    }
  })
}