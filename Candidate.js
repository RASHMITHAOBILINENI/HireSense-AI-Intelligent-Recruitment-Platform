const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeText: String,
  personality: Object,
  score: Number
});

module.exports = mongoose.model('Candidate', CandidateSchema);