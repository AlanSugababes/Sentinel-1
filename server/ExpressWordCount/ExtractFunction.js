let extractKeywords = function(assessedPages, keywordList) {
  let extractedText = [];
  const keywordCount = [];

  extractedText = assessedPages.split(" ");

  keywordCount.push({ word:"total word count", count: extractedText.length });
  for (let targetWord in keywordList.keywords) {
    let counter = 0;
    for (let caughtWord in extractedText) {
      if (extractedText[caughtWord] == keywordList.keywords[targetWord]) {
        counter++;
      }
    }
    let tempObject = { word: keywordList.keywords[targetWord], count: counter };
    keywordCount.push(tempObject);
  }
  return keywordCount;
}

module.exports = {
  extractKeywords: extractKeywords
}
