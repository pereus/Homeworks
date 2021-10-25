function recursion(n) {
    if ((n <= 1) && (n > -1)) {
        return n;
    } else if (n < 0) {
        return recursion(n+2) - recursion(n+1);
    } else {
        return recursion(n-1) + recursion(n-2);
    };
};
do {
    let fib;
    do {
        fib = +prompt('Enter the number to calculate Fibonacci');
        } while (fib !== fib);
    console.log(recursion(fib));
    alert(`Result of calculation Fibonacci is ${recursion(fib)}`);
} while (confirm('Do you want to repeat?'));
