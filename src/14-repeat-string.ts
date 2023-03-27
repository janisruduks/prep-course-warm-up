export {};

const repeatString = (s: string, n: number) => {
    return s.repeat(n);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
