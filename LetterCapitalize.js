/*
** Have the function LetterCapitalize(str) take the str parameter being passed 
** and capitalize the first letter of each word. Words will be separated by 
** only one space. 
*/

function LetterCapitalize(str) {
	// \b is a word boundary
	return str.replace(/\b[a-z]/gi, function(match) {
		return match.toUpperCase();
	});
}
