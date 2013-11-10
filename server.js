var express = require('express')
  , fs = require('fs')
  , passport = require('passport')
  , logger = require('mean-logger')

var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , auth = require('./config/middlewares/authorization')
  , mongoose = require('mongoose')

var db = mongoose.connect(config.db)

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
})

require('./config/passport')(passport, config)

var app = express()

require('./config/express')(app, config, passport)

require('./config/routes')(app, passport, auth)

var port = process.env.PORT || 3000
app.listen(port)
console.log('Express app started on port '+port)

logger.init(app, passport, mongoose)
exports = module.exports = app
