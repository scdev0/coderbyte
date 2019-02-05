/*
** Have the function ScaleBalancing(strArr) read strArr which will contain two 
** elements, the first being the two positive integer weights on a balance scale 
** (left and right sides) and the second element being a list of available weights 
** as positive integers. Your goal is to determine if you can balance the scale 
** by using the least amount of weights from the list, but using at most only 2 weights.
** For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a 
** balance scale with a weight of 5 on the left side and 9 on the right side. It is 
** in fact possible to balance this scale by adding a 6 to the left side from the list 
** of weights and adding a 2 to the right side. Both scales will now equal 11 and they 
** are perfectly balanced. Your program should return a comma separated string of the 
** weights that were used from the list in ascending order, so for this example your 
** program should return the string 2,6.
**
** There will only ever be one unique solution and the list of available weights 
** will not be empty. It is also possible to add two weights to only one side of 
** the scale to balance it. If it is not possible to balance the scale then your 
** program should return the string not possible. 
*/

function ScaleBalancing(strArr) {
	// Process the input
	let balance = strArr[0].split(',');
	let left = Number(balance[0].substring(1));
	let right = Number(balance[1].slice(1, -1));
	let weights = strArr[1].split(',').map((weight) => weight.substring(1));
	weights[weights.length - 1] = weights[weights.length - 1].slice(0, -1);
	weights = weights.map((weight) => Number(weight));

	return left < right ? Balance(left, right, weights) : Balance(right, left, weights);
}

function Balance(side1, side2, weights) {
	// Check adding one weight to side1
	for (let weight of weights) {
		if (side1 + weight === side2) {
			return weight.toString();
		}
	}

	// Check adding two weights to side1
	let i = 0; // min pivot
	let j = weights.length - 1; // max pivot
	let min, max;
	while (i < j) {
		min = weights[i];
		max = weights[j];
		if (side1 + min + max === side2) {
			return `${min},${max}`;
		} else if (side1 + min + max > side2) {
			j--;
		} else {
			i++;
		}
	}

	// Check by fixing side1
	let fixedSide1;
	for (j = weights.length - 1; j > 0; j--) {
		fixedSide1 = side1 + weights[j];
		for (i = 0; i < weights.length - 1; i++) {
			if (side2 + weights[i] === fixedSide1) {
				return `${weights[i]},${weights[j]}`;
			}
		}
	}

	// Check by fixing side2
	let fixedSide2;
	for (i = 0; i < weights.length - 1; i++) {
		fixedSide2 = side2 + weights[i];
		for (j = weights.length - 1; j > 0; j--) {
			if (side1 + weights[j] === fixedSide2) {
				return `${weights[i]},${weights[j]}`;
			}
		}
	}

	return 'not possible';
}
