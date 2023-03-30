export {};

const count = (str: string, target: string) => {

    return str.toUpperCase().split(target.toUpperCase()).length - 1
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
