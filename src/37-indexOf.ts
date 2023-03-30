export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: Array<any>, valueToRemove: any) {
  const copyNumbers = numbers;
  const copyNames = names;
  if (typeof arr[0] === 'number') {
    copyNumbers.splice(copyNumbers.indexOf(valueToRemove), 1);
    return copyNumbers; 
  } else {
    copyNames.splice(copyNames.indexOf(valueToRemove), 1);
    return copyNames;
  }
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
