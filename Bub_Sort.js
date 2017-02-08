function bubSort(arr){
    if (arr.length == 0) return arr;
    if (arr.length == 1) return arr;

    var start = 0;
    var second = 1;
    var swapCount = 0;

    while (second != arr.length){
// start = 2; second = 3;
        if (arr[start] > arr[second]){
            // storing temp variables
            var first_num = arr[start];
            var second_num = arr[second];
            // swap them;
            arr[start] = second_num;
            arr[second] = first_num;
            swapCount++;
        }
        start++;
        second++;
    }

// swapCount = 1; arr = [2,3,4]
    if (swapCount > 0){
        return bubSort(arr);
    }else{
        return arr;
    }

}

// testing
bubSort([3,2,4]);
