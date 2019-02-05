/*
** Have the function QuestionsMarks(str) take the str string parameter, which will 
** contain single digit numbers, letters, and question marks, and check if there 
** are exactly 3 question marks between every pair of two numbers that add up to 10. 
** If so, then your program should return the string true, otherwise it should 
** return the string false. If there aren't any two numbers that add up to 10 in 
** the string, then your program should return false as well.
*/

function QuestionsMarks(str) {
	let pos = str.search(/[0-9]/g);
	let anySumToTen = false;
	let remainingStr, nextNumberIndex, segment, count;

	while (pos < str.length - 1) {
		remainingStr = str.substring(++pos);
		nextNumberIndex = remainingStr.search(/[0-9]/g);
		if (nextNumberIndex === -1) {
			return anySumToTen;
		}
		nextNumberIndex += pos;
		segment = str.substring(pos, nextNumberIndex);
		count = segment.match(/\?/g) ? segment.match(/\?/g).length : 0;
		if (Number(str.charAt(pos - 1)) + Number(str.charAt(nextNumberIndex)) === 10) {
			anySumToTen = true;
			if (count !== 3) {
				return false;
			}
		}
		pos = nextNumberIndex;
	}

	return anySumToTen;
}
