"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotatedArray = require("./code/rotated-array-min");
const gcd = require("./code/gcd-numbers");
const search = require("./code/binary-search");
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/getMinFromRotatedArray', function (req, res) {
    let numbers = [5, 6, 7, 8, 9, 11, 13, 2, 3, 4];
    let minNum = rotatedArray.getMinFromRotatedArray(numbers);
    res.send("min number in the rotated " + numbers + " array is " + minNum);
});
app.get('/gcd', function (req, res) {
    let first = 98;
    let second = 56;
    let gcdResult = gcd.getGCD(first, second);
    res.send("Gcd of " + first + ", " + second + " is " + gcdResult);
});
app.get('/search', function (req, res) {
    let numbers = [5, 6, 7, 8, 8,
        9, 11, 13, 14, 14,
        15, 16, 16, 16, 16,
        16, 16, 16, 16, 16,
        16, 17, 18, 19];
    let searchNum = 19;
    //let numIndex: number = search.searchNumber(numbers, 16);
    let numIndex = search.searchNumberLastIndexWithDuplicates(numbers, searchNum);
    res.send("the searched number " + searchNum + " in " + numbers + " is at (last) index " + numIndex);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
