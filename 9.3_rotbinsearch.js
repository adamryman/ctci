var binarySearch = function (n, arr, min, max) {
	var piv = Math.floor((max + min) / 2);
	
	if (max < min) {
		return -1;
	} else if (arr[piv] >  n) {
		return binarySearch(n, arr, min, piv - 1);
	} else if (arr[piv] < n) {
		return binarySearch(n, arr, piv + 1, max);
	} else {
		return piv;
	}
};

var binarySearchRotated = function (n, arr) {
	return binarySearchRotatedInternal(n, arr, 0, arr.length - 1);
};

var binarySearchRotatedInternal = function (n, arr, min, max) {
	var piv = Math.floor((max + min) / 2);
	if (arr[min] < arr[max] || min == max) {
		if (n < arr[min] || n > arr[max]) {
			return -1;
		} else {
			return binarySearch(n, arr, min, max);
		}
	} else {
		var l = binarySearchRotatedInternal(n, arr, min, piv);
		if(l > -1) {
			return l;
		}
		var r = binarySearchRotatedInternal(n, arr, piv + 1, max);
		return r;
	}
};


// Old code VV

//finds the position of the min value in rotated increasingly sorted array
var binSearchMin = function (arr, min, max) {
	//if max is only one greater than min then 0 is the min
	if (max - min < 2){
		return 0;
	}
	//if the min value is smaller than the max value, it must be the min position of the array
	//or if the position just before the current min is larger than min that means that min is
	//the min position of the array
	if (arr[min] < arr[max] || (min - 1 > 0 && arr[min -1] > arr[min])) {
		return min;
	} else { //arr[min] >= arr[max]
		var piv = Math.floor((max+min)/2);
		//check if the middle is the min	
		if(arr[piv - 1] > arr[piv]){
			return piv;
		} else	if (arr[min] < arr[piv]) {
			return binSearchMin(arr, piv , max);
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

//Returns a position as if the array wrapped. i.e. (4, 2, [1, 2, 3, 4, 5]) would return
// the 4th position relative to the 2nd position. Which would be 4 from the 2nd position
// i.e. the 1st position. So it would return 1
var getRelativeArrayPosition = function (val, array_starting_position, arr) {
	return (val + array_starting_position) % arr.length;
}

var getRelativeArrayPositionValue = function (val, array_starting_position, arr) {
	return arr[getRelativeArrayPosition(val, array_starting_position, arr)];
}

var complexBinarySearchRotated = function (n, arr) {
	var array_min_position = binSearchMin(arr, 0, arr.length - 1);
	
	return complexBinarySearchRotatedInternal(n, arr, 0, arr.length -1, array_min_position);
}

var complexBinarySearchRotatedInternal = function (n, arr, min, max, array_min_position) {
	if(min > max) {
		return -1;
	} else {
		var piv = Math.floor((max + min)/2);
		var value = getRelativeArrayPositionValue(array_min_position, piv, arr);
		if (n == value){
			return getRelativeArrayPosition(array_min_position, piv, arr);
		} else if (n < value) {
			return complexBinarySearchRotatedInternal(n, arr, min, piv - 1, array_min_position);
		} else if (n > value) {
			return complexBinarySearchRotatedInternal(n, arr, piv + 1, max, array_min_position);
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

	console.log("Searching for 8 complex complexBinarySearchRotated");
	console.log(array);
	console.log(complexBinarySearchRotated(8, array));

	console.log(array2);
	console.log(complexBinarySearchRotated(8, array2));

	console.log(array3);
	console.log(complexBinarySearchRotated(8, array3));

	console.log(array4);
	console.log(complexBinarySearchRotated(8, array4));

	console.log("Searching for 0 complex complexBinarySearchRotated");
	console.log(six1);
	console.log(complexBinarySearchRotated(0, six1));

	console.log(six2);
	console.log(complexBinarySearchRotated(0, six2));

	console.log(six3);
	console.log(complexBinarySearchRotated(0, six3));

	console.log("Searching for 8 new binarySearchRotated");
	console.log(array);
	console.log(binarySearchRotated(8, array));

	console.log(array2);
	console.log(binarySearchRotated(8, array2));

	console.log(array3);
	console.log(binarySearchRotated(8, array3));

	console.log(array4);
	console.log(binarySearchRotated(8, array4));

	console.log("Searching for 0 new binarySearchRotated");
	console.log(six1);
	console.log(binarySearchRotated(0, six1));

	console.log(six2);
	console.log(binarySearchRotated(0, six2));

	console.log(six3);
	console.log(binarySearchRotated(0, six3));
};

test();
