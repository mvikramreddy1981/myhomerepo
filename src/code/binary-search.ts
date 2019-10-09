const searchNumber = function(numbers: number[], search: number) {
    let indexOfNum: number = findNumber(numbers, 0, numbers.length - 1, search);
    return indexOfNum;
 }

 const searchNumberLastIndexWithDuplicates = function(numbers: number[], search: number) {
    let indexOfNum: number = findNumberLastIndexWithDuplicates(numbers, 0, numbers.length - 1, search);
    return indexOfNum;
 }

 const findNumber = function(numbers: number[], low: number, high: number, search: number)
 {
     if (high <= low) return -1;

     let mid: number = Math.round(low + (high - low)/2);

     console.log ( low + ' - ' + high +' - ' + numbers[mid] )

     if (search < numbers[mid]) {
        return findNumber(numbers, low, mid-1, search);
     } else if (search > numbers[mid]) {
        return findNumber(numbers, mid+1, high, search);
     } else {
        return mid + 1;
     }
 }

 const findNumberLastIndexWithDuplicates = function(numbers: number[], low: number, high: number, search: number)
 {
     if (high <= low) return -1;

     let mid: number = Math.floor((high + low)/2);

     console.log ( low + ' - ' + high +' - ' + numbers[mid] + '~~~' + numbers[mid + 1] )

     if (search < numbers[mid]) {
        return findNumber(numbers, low, mid-1, search);
     } else if (search > numbers[mid]) {
        return findNumber(numbers, mid+1, high, search);
     } else {
        if (mid + 1 >= high ||  search != numbers[mid + 1]) {
            return mid + 1;
        } else {
            return findNumber(numbers, mid + 1, high, search);
        }
     }
 }

 export {searchNumber, searchNumberLastIndexWithDuplicates}
