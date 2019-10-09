import * as rotatedArray from "./code/rotated-array-min";
import * as gcd from "./code/gcd-numbers";
import * as search from "./code/binary-search";
var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getMinFromRotatedArray', function (req, res){
    let numbers: number[] = [5, 6, 7, 8, 9, 11, 13, 2, 3, 4];
    let minNum: number = rotatedArray.getMinFromRotatedArray(numbers);
    res.send("min number in the rotated " + numbers + " array is " + minNum);
});

app.get('/gcd', function (req, res){
    let first: number = 98;
    let second: number = 56;
    let gcdResult: number = gcd.getGCD(first, second);
    res.send("Gcd of " + first + ", " + second +" is " + gcdResult);
});

app.get('/search', function (req, res){
    let numbers: number[] = [5,  6,   7,  8, 8,
                             9,  11,  13, 14, 14,
                             15, 16,  16, 16, 16,
                             16, 16,  16, 16, 16,
                             16, 17,  18, 19];
    let searchNum: number = 19;
    //let numIndex: number = search.searchNumber(numbers, 16);
    let numIndex: number = search.searchNumberLastIndexWithDuplicates(numbers, searchNum);
    res.send("the searched number " + searchNum + " in " + numbers + " is at (last) index " + numIndex);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
