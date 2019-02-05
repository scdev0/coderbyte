/* Have the function SimpleSymbols(str) take the str parameter being passed and 
** determine if it is an acceptable sequence by either returning the string 
** true or false. The str parameter will be composed of + and = symbols with 
** several letters between them (ie. ++d+===+c++==a) and for the string to be 
** true each letter must be surrounded by a + symbol. So the string to the left 
** would be false. The string will not be empty and will have at least one letter. 
*/

function SimpleSymbols(str) {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

	if (ALPHABET.indexOf(str.charAt(0)) !== -1) {
		return false;
	}

	for (let i = 1; i < str.length - 1; i++) {
		let char = str.charAt(i);
		if (ALPHABET.indexOf(char) !== -1) {
			if (str.charAt(i - 1) !== '+' || str.charAt(i + 1) !== '+') {
				return false;
			}
		}
	}

	return true;
}
