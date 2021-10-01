const perf = require('execution-time')();

const arr = [1,1,2,-2,5,6,4,8,4,-7,4];
const arrSum = arr => {

    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i]+arr[j] === 0){
                return true
            }
        }
    }
    return false
};

console.log(arrSum(arr));

perf.start();
arrSum(arr);
let resultsArr = perf.stop();

console.log('Results for the arr');
console.log("speed", resultsArr.preciseWords);

// Time complexity of the function arrSum is O(n^2)
