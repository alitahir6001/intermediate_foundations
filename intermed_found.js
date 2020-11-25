// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).  

// We did this one in class - check lecture video

function sigma(banana) {
    var sum = 0
    for (var i = 1; i <= banana; i++) {
        sum+= i;
    }
    return sum;
}
console.log(sigma(3));
console.log(sigma(5));

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(banana) {
    var product = 1  //if you set it to zero, it will multiplay i by zero, which will always = 0
    for (var i = 1; i <=banana; i++) {
        product*=i; // same as above function really, we're just doing product instead of sum
    }
    return product;
}
console.log(banana(3));
console.log(banana(5));



// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

// We also did this in class, refer to notes and ask cohort-mates since the webfund discord is no longer available

function fibonacci(num) {
    var sum = 0;
    var a = 0;
    var b = 0;
    for (var i = 0; i<=num; i++) { // iterate through the passed numbers
        sum = a + b;  // here's where i sum the last two numbers
        sum = b; // the new sum
    }
    return sum;
}
console.log(fibonacci(5));  // OK this one is tough as heck, i havne't gotten it yet.



// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function Secondtolast (arr) {
    if (arr.length<2) { // if the length of the array is less than two, return null
    return null;
    } 
    
    else { // otherwise
    return arr[arr.length-2]; // return the second to last index of arr (if it was 3rd to last, it'd be -3)
    }
}
console.log(Secondtolast([42, true, 4, "Liam", 7]));
console.log(Secondtolast ([4,2]));


// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function Nthtolast(arr, y){ // pass it an array and the index number we will return
    if (arr.length < y){ //if the length is shorter than the index value we want, return null
        return null;
    } 
    
    else {
        return arr[arr.length-y]; //otherwise return the index value which is the length of the array - the y value (n)
    }
}
console.log(Nthtolast ([5,2,3,6,4,9,7],3));
console.log(Nthtolast ([1,3],3)); // null


// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.



// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].



// I've decided to forgo the last two in the interest of time and sanity =)