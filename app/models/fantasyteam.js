var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;

var FantasyTeamSchema = new Schema({
  owner: { type: Schema.ObjectId, ref: 'User' },
  league: { type: Schema.ObjectId, ref: 'League' },
  name: { type: String },
  players: [{ type: Schema.ObjectId, ref: 'Player'}]
});

FantasyTeamSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id: id }).populate('owner').populate('league').exec(cb);
  }
};

mongoose.model('FantasyTeam', FantasyTeamSchema);