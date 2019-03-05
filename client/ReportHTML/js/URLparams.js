const urlParams = new URLSearchParams(location.search);
const totalWordCount = urlParams.get('total word count')
const words = urlParams.getAll('word') // Will store multiple words in an array
const wordcount = urlParams.getAll('count') // Will store all word counts in an array
// percentage
let threatPercentage = (100 / totalWordCount) * totalThreatWords;
