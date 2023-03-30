export {};

function greatest(...args: number[]) {
    return Math.max(...args)
}

console.log(greatest(1, 3, 4, 4)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
