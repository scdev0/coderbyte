/*
** Have the function LetterChanges(str) take the str parameter being passed and 
** modify it using the following algorithm. Replace every letter in the string 
** with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
** Then capitalize every vowel in this new string (a, e, i, o, u) and finally 
** return this modified string.
*/

function LetterChanges(str) {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
	const VOWELS = 'aeiou';

	let result = '';
	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		if (ALPHABET.indexOf(char) !== -1) {
			let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
			newChar = VOWELS.indexOf(newChar) == -1 ? newChar : newChar.toUpperCase();
			result += newChar;
		} else {
			result += char;
		}
	}

	return result;
}
