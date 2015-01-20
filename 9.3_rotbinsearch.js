
//finds the position of the min value in rotated increasingly sorted array
var binSearchMin = function (arr, min, max) {
	if (max - min < 2){
		return 0;
	}
	if (arr[min] < arr[max] || (min - 1 > 0 && arr[min -1] > arr[min])) {
		return min;
	} else { //arr[min] >= arr[max]
		var piv = Math.floor((max+min)/2);
		if(arr[piv - 1] > arr[piv]){
			return piv;
		}		
		if (arr[min] < arr[piv]) {
			return binSearchMin(arr, piv, max);
		} else if (arr[min] > arr[piv]) {
			return binSearchMin(arr, min, piv);
		} else { //arr[min] == arr[piv]
			var left = binSearchMin(arr, min, piv);
			if (left != 0) {
				return left;
			}
			var right = binSearchMin(arr, piv, max);
			if (right != 0) {
				return right;
			}
		}
	}
	return 0;
}

//
var arrayShift = function (val, pos, arr) {
	return (val + pos) % arr.length;
}

var arrayShiftVal = function (val, pos, arr) {
	return arr[arrayShift(val, pos, arr)];
}

var binarySearchRotated = function (n, arr) {
	var min = binSearchMin(arr, 0, arr.length - 1);
	if(arrayShiftVal(min, arr.length - 1, arr) == n) {
		return arrayShift(min, arr.length - 1, arr); 
	}
	return binSearchRotRec(n, arr, 0, arr.length -1, min);
}

var binSearchRotRec = function (n, arr, min, max, val) {
	if(max === min) {
		return -1;
	} else {
		
		var piv = Math.floor((max + min)/2);
		var value = arrayShiftVal(val, piv, arr);
		if (n == value){
			return arrayShift(val, piv, arr);
		} else if (n < value) {
			return binSearchRotRec(n, arr, min, piv, val);
		} else if (n > value) {
			return binSearchRotRec(n, arr, piv, max, val);
		}
	}
};

var test = function () {
	var array = [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4 ];

	var array2 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	
	var array3 = [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 6 ];

	var array4 = [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7 ];
	var six1 = [6, 0, 6, 6, 6];
	var six2 = [6, 6, 6, 0, 6];
	var six3 = [6, 6, 6, 6, 6];	
	console.log("Searching for 8");
	console.log(array);
	console.log(binarySearchRotated(8, array));

	console.log(array2);
	console.log(binarySearchRotated(8, array2));

	console.log(array3);
	console.log(binarySearchRotated(8, array3));

	console.log(array4);
	console.log(binarySearchRotated(8, array4));

	console.log("Searching for 0");
	console.log(six1);
	console.log(binarySearchRotated(0, six1));

	console.log(six2);
	console.log(binarySearchRotated(0, six2));

	console.log(six3);
	console.log(binarySearchRotated(0, six3));
};

test();
