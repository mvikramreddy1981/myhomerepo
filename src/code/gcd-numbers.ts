const getGCD = function(first: number, second: number) {
    let gcdResult: number = findGCD(first, second);
    return gcdResult;
 }

 const findGCD = function(first: number, second: number)
 {
     if ((first == 0 || second == 0) || (first == 1 || second == 1)) {
         return first;
     }

     if (first == second) {
         return first;
     }

     if (first > second) {
         return findGCD(first - second, second);
     } else {
         return findGCD(first, second-first);
     }
 }

 export { getGCD }
