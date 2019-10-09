"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchNumber = function (numbers, search) {
    let indexOfNum = findNumber(numbers, 0, numbers.length - 1, search);
    return indexOfNum;
};
exports.searchNumber = searchNumber;
const searchNumberLastIndexWithDuplicates = function (numbers, search) {
    let indexOfNum = findNumberLastIndexWithDuplicates(numbers, 0, numbers.length - 1, search);
    return indexOfNum;
};
exports.searchNumberLastIndexWithDuplicates = searchNumberLastIndexWithDuplicates;
const findNumber = function (numbers, low, high, search) {
    if (high <= low)
        return -1;
    let mid = Math.round(low + (high - low) / 2);
    console.log(low + ' - ' + high + ' - ' + numbers[mid]);
    if (search < numbers[mid]) {
        return findNumber(numbers, low, mid - 1, search);
    }
    else if (search > numbers[mid]) {
        return findNumber(numbers, mid + 1, high, search);
    }
    else {
        return mid + 1;
    }
};
const findNumberLastIndexWithDuplicates = function (numbers, low, high, search) {
    if (high <= low)
        return -1;
    let mid = Math.floor((high + low) / 2);
    console.log(low + ' - ' + high + ' - ' + numbers[mid] + '~~~' + numbers[mid + 1]);
    if (search < numbers[mid]) {
        return findNumber(numbers, low, mid - 1, search);
    }
    else if (search > numbers[mid]) {
        return findNumber(numbers, mid + 1, high, search);
    }
    else {
        if (mid + 1 >= high || search != numbers[mid + 1]) {
            return mid + 1;
        }
        else {
            return findNumber(numbers, mid + 1, high, search);
        }
    }
};
