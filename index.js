// Code your solution in this file!

myArray = ['Sally', 'Bob', 'John', 'Derek'];


const returnFirstTwoDrivers = function(array) {
    let newArray = [...array.splice(0,2)];
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    let newArray = [...array.splice(array.length-2,array.length-1)];
    return newArray;
}

