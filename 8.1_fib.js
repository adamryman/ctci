var fib = function (n) {
   if(n === 1){
      return 1;
   }
   else if(n === 2){
      return 1;
   }
   else if(n >= 3){
      return fib(n - 1) + fib(n - 2);
   }
}
var i;
for(i = 1; i <= 100; i++){
   console.log(fib(i));
}
