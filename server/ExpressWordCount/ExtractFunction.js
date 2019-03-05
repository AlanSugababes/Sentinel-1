let extractKeywords = function(assessedPages, keywordList) {
  const extractedText = [];
  const keywordCount = [];

  console.log(assessedPages);
  // let words = assessedPages.split(" ");
  // console.log(words);
  // for (let text in assessedPages) {
  //     let tempHold = assessedPages[text];
  //
  //     console.log(tempHold);
  //     for (let word in tempHold) {
  //       let temp = tempHold[word];
  //       // for (var caught in temp) {
  //       //   console.log(temp[caught]);
  //       //   extractedText.push(temp[caught]);
  //       // }
  //     }
  }
  console.log("hi");
  return extractedText;
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
