// In mathematics, the factorial of a non-negative integer n, denoted by n!,
//     is the product of all positive integers less than or equal to n.
//     For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(num)
{
    if (num === 0)
    {
        return 1;
    }
    return num * factorial(num-1);
}
console.log(factorial(5));

// 5*factorial(5-1)
//         4*factorial(4-1)
//                 3*factorial(3-1)
//                         2*factorial(2-1)
//                                 1*factorial(1-1)
//                                         0 <-- if condition returns 1



// Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function range(start_num, end_num) {

    if(end_num - start_num === 2){
        return [start_num + 1];
    }
    else {
        var list = range(start_num, end_num-1);
        list.push(end_num-1);
        return list;
    }
};

