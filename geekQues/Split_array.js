// JavaScript Program to Split the array and add the first part to the end

// Input : arr[] = {12, 10, 5, 6, 52, 36}
//             k = 2
// Output : arr[] = {5, 6, 52, 36, 12, 10}
// Explanation : Split from index 2 and first 
// part {12, 10} add to the end .

// Input : arr[] = {3, 1, 2}
//            k = 1
// Output : arr[] = {1, 2, 3}
// Explanation : Split from index 1 and first
// part add to the end.

// JavaScript program to split
// array and move first
// part to end.

function splitArr(arr, n, k){
	for (let i = 0; i < k; i++)
	{
		// Rotate array by 1.
		let x = arr[0];
		for (let j = 0; j < n - 1; ++j)
			arr[j] = arr[j + 1];
		arr[n - 1] = x;
	}
}

// Driver code

let arr = [ 12, 10, 5, 6, 52, 36 ];
let n = arr.length;

let position = 2;
splitArr(arr, 6, position);
for (let i = 0; i < n; ++i)
	console.log(arr[i]+" ");

