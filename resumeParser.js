const pdfParse = require('pdf-parse');
const fs = require('fs');

const parseResume = async (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
};

module.exports = { parseResume };