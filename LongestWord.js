/* 
** Have the function LongestWord(sen) take the sen parameter being passed and 
** return the largest word in the string. If there are two or more words that 
** are the same length, return the first word from the string with that length. 
** Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) {
	let words = sen.split(' ');
	let maxLen = 0;
	let cleanWords = words.map(function(word) {
		return word.replace(/[^A-z0-9]/gi, function(match) {
			return '';
		});
	});

	let result = '';
	for (word of cleanWords) {
		if (word.length > maxLen) {
			result = word;
			maxLen = word.length;
		}
	}
	return result;
}
