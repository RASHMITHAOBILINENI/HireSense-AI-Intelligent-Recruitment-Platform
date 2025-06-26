const Candidate = require('../models/Candidate');
const { parseResume } = require('../services/resumeParser');
const { analyzePersonality } = require('../services/ibmWatsonService');
const path = require('path');

const uploadResume = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../../uploads', req.file.filename);
    const resumeText = await parseResume(filePath);
    const personality = await analyzePersonality(resumeText);

    const candidate = new Candidate({
      name: req.body.name,
      email: req.body.email,
      resumeText,
      personality,
      score: Math.random() * 100
    });

    await candidate.save();
    res.json({ success: true, candidate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadResume };