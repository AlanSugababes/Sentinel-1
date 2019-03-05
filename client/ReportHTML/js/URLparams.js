const urlParams = new URLSearchParams(location.search);
const words = urlParams.getAll('word') // Will store multiple words in an array
const wordcount = urlParams.getAll('count') // Will store all word counts in an array
