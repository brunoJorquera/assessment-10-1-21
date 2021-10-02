// My original work
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

// console.log(arrSum(arr));

perf.start();
arrSum(arr);
let resultsArr = perf.stop();

// console.log('Results for the arr');
// console.log("speed", resultsArr.preciseWords);

// Time complexity of the function arrSum is O(n^2), space complexity is also O(n^2)


// EOD Review w/ Stuart ===============================================================

const arrOfNums = [1,55,2,3,5,-55]

// const addToZero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log('My Number to compare: ')
//         console.log(arr[i] + `===================================`)
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return true
//                 // console.log(`numbers add to zero!`)
//             }
//         }
//     }
//     return false
// }

// O(n^2)

// addToZero(arrOfNums)

//Updated and optimized ==============================================================================

const addToZero = (arr) => {
    const seen = {}
    for(let i = 0; i < arr.length; i++){
        if(seen[-(arr[i])]){
            console.log(true)
        }
        seen[arr[i]] = true
    }
    // console.log(seen)
    return false
}

// addToZero(arrOfNums)

//  Unique Characters Stuart Ex. =============================================================================

// const hasUniqueChar =(str) => {
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i] + '===========')
//         for ( let j = i + 1; j < str.length; j++){
//             if(str[i].toLowerCase() === str[j].toLowerCase()){
//                 return false
//             }
//         }
//     }
//     return true
// }

// console.log(hasUniqueChar('Monday'))
// console.log(hasUniqueChar('Moonday'))

//Updated ============================================

const hasUniqueChar = (str) => {
    const seenLetters = new Set()
    for(let i = 0; i < str.length; i++){
      const letter = str[i].toLowerCase()
      if(seenLetters.has(letter)){
        console.log(seenLetters)
        return false
      }
      seenLetters.add(letter)
    }
    console.log(seenLetters)
    return true
  }

// console.log(hasUniqueChar('Monday'))
// console.log(hasUniqueChar('MondayN'))

// Pangram Stuart Ex. ===========================================

// const isPan = (str) => {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     console.log(alpha) //before removal
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < alpha.length; j++){
//             if(str[i].toLowerCase() === alpha[j]){
//                 alpha.splice(j, 1)
//                 j = alpha.length
//             }
//         }
//     }
//     console.log(alpha)
//     if(alpha.length === 0){
//         return true
//     }
//     return false
// }

// console.log(isPan('The quick brown fox jumps over the lazy dog!'))

//Updated =========================================

// const isPan = (str) => {
//     const alpha = new Set()
//     str = str.toLowerCase().replace(/([^a-z])+/g, '').split('')
//     console.log(alpha) //before removal
//     str.forEach((letter) => {
//         alpha.add(letter)
//     })
//     console.log(alpha)
//     if(alpha.size === 26){
//         return true
//     }
//     return false
// }

//updated pt 2 =======================

const isPan = (str) => {
    const alpha = new Set('abcdefghijklmnopqrstuvwxyz'.split(''))
    str.split('').forEach((letter) => {
        alpha.delete(letter)
    })
    return alpha.size === 0 ? true : false
}


// console.log(isPan('The quick brown fox jumps over the lazy dog!'))

// Longest Word w/ Stuart ex: ==============================================

