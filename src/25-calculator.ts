export {};

function add(x: number, y:number) {
    return x + y;
}

function subtract(x: number, y:number) {
    return x - y;
}

function sum(arr: number[]) {
    return arr.reduce((preVal, curVal) => {
        return preVal + curVal
    }, 0);
}

function multiply(arr: number[]) {
    return arr.reduce((preVal, curVal) => {
        return preVal * curVal
    }, 1);
}

function power(x: number, y:number) {
    return Math.pow(x, y);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
