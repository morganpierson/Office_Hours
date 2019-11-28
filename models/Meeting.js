const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  attendees: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  time: Date,
  notes: String
},
{
  timestamps: true
})

module.exports = mongoose.model("Meeting", meetingSchema)