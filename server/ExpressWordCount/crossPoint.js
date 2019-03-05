const fileSys = require('fs');

const test = require('./lab1.js');
const assessedDocImport = fileSys.readFileSync('./jsons/content2.json', 'utf8');
const assessedDoc = JSON.parse(assessedDocImport);
const assessedPages = assessedDoc.formImage.Pages;
const assessedTexts = assessedDoc.formImage.Pages[0].Texts;

const keywordsImport = fileSys.readFileSync('keywords.json', 'utf8');
const keywordList = JSON.parse(keywordsImport);

let words = test.extractKeywords(assessedPages, keywordList);
console.log(words);
