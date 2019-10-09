"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getGCD = function (first, second) {
    let gcdResult = findGCD(first, second);
    return gcdResult;
};
exports.getGCD = getGCD;
const findGCD = function (first, second) {
    if ((first == 0 || second == 0) || (first == 1 || second == 1)) {
        return first;
    }
    if (first == second) {
        return first;
    }
    if (first > second) {
        return findGCD(first - second, second);
    }
    else {
        return findGCD(first, second - first);
    }
};
