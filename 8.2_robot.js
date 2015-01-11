var robot = function (n) {
	return recursive_robot(n,0,0);
}

var recursive_robot = function (n,x,y) {
	if ( n === 0) {
		return 0;
	}
	else if ( x === n || y === n) {
		return 1;
	}
	else {
		return recursive_robot(n,x+1,y) + recursive_robot(n,x,y+1);
	}
}

for(var i = 0; i<9; i++){
	console.log(robot(i));
}
