/*
** Have the function ChessboardTraveling(str) read str which will be a string 
** consisting of the location of a space on a standard 8x8 chess board with no 
** pieces on the board along with another space on the chess board. The structure 
** of str will be the following: "(x y)(a b)" where (x y) represents the position 
** you are currently on with x and y ranging from 1 to 8 and (a b) represents some 
** other space on the chess board with a and b also ranging from 1 to 8 where 
** a > x and b > y. Your program should determine how many ways there are of 
** traveling from (x y) on the board to (a b) moving only up and to the right. 
** For example: if str is (1 1)(2 2) then your program should output 2 because 
** there are only two possible ways to travel from space (1 1) on a chessboard 
** to space (2 2) while making only moves up and to the right. 
*/

function ChessboardTraveling(str) {
	let positions = str.split(')');
	let firstPos = positions[0].substring(1).split(' ').map((num) => +num);
	let secondPos = positions[1].substring(1).split(' ').map((num) => +num);
	let numRight = secondPos[0] - firstPos[0];
	let numUp = secondPos[1] - firstPos[1];

	// Use the formula for (n Choose k) where n = numRight + numUp, k = numRight
	// and simplying the terms
	let rFactorial = factorial(numRight);
	let uFactorial = factorial(numUp);
	return factorial(numRight + numUp) / (rFactorial * uFactorial);
}

function factorial(num) {
	let f = 1;
	for (let i = 2; i <= num; i++) {
		f *= i;
	}
	return f;
}
