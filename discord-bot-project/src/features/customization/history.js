const history = require('mongoose');

const HistorySchema = new history.Schema({
  userId: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const History = history.model('History', HistorySchema);

module.exports = History;