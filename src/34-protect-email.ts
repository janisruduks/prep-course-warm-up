export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(s: string) {
    const symbol = "...";
    const at = "@";
    const email = s.slice(s.indexOf(at), s.length);
    let slicedStr = s.slice(0, s.indexOf(at));
    if (slicedStr.length >= 6) {
        return slicedStr.slice(0, 3) + symbol + email;
    }else {
        return slicedStr.slice(0, -3) + symbol + email;
    }
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com