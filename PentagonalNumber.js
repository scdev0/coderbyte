/*
** Have the function PentagonalNumber(num) read num which will be a positive integer 
** and determine how many dots exist in a pentagonal shape around a center dot on 
** the Nth iteration. For example, in the image below you can see that on the first 
** iteration there is only a single dot, on the second iteration there are 6 dots, 
** on the third there are 16 dots, and on the fourth there are 31 dots. 
*/

function PentagonalNumber(num) {
	let count = 1;
	for (let i = 0; i < num; i++) {
		count = count + i * 5;
	}
	return count;
}
