const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const personalityInsights = new PersonalityInsightsV3({
  version: '2020-06-01',
  authenticator: new IamAuthenticator({ apikey: process.env.WATSON_API_KEY }),
  serviceUrl: process.env.WATSON_URL,
});

const analyzePersonality = async (text) => {
  const profileParams = {
    content: text,
    contentType: 'text/plain',
    consumptionPreferences: true,
    rawScores: true
  };
  const response = await personalityInsights.profile(profileParams);
  return response.result;
};

module.exports = { analyzePersonality };