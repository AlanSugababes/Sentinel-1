let extractKeywords = function(assessedPages, keywordList) {
  const extractedText = [];
  const keywordCount = [];

  for (let text in assessedPages) {
      let tempHold = assessedPages[text].Texts;
      for (let word in tempHold) {
        let temp = tempHold[word].R[0].T.replace(new RegExp("%E2%80%99", "g"), "'")
        .replace(new RegExp("%2C", "g"), " ")
        .replace(new RegExp("%3A", "g"), ":")
        .replace(/"%2F"/g, "/").split("%20");
        for (var caught in temp) {
          extractedText.push(temp[caught]);
        }
      }
  }

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
