"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMinFromRotatedArray = function (numbers) {
    let minNum = findMin(numbers, 0, numbers.length - 1);
    return minNum;
};
exports.getMinFromRotatedArray = getMinFromRotatedArray;
const findMin = function (numbers, low, high) {
    //If not rotated
    if (high < low)
        return numbers[0];
    // one element left
    if (high == low)
        return numbers[low];
    let mid = Math.round(low + (high - low) / 2);
    // Check if element (mid+1) is minimum element. Consider
    if (mid < high && numbers[mid + 1] < numbers[mid])
        return numbers[mid + 1];
    // Check if mid itself is minimum element
    if (mid > low && numbers[mid] < numbers[mid - 1])
        return numbers[mid];
    // go left or right
    if (numbers[high] > numbers[mid]) {
        return findMin(numbers, low, mid - 1);
    }
    else {
        return findMin(numbers, mid + 1, high);
    }
};
