export {};

function tidyUpString(str: any) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string[]) {
  const cleanNames = str.map(n => {
    n = tidyUpString(n);
    n = n[0].toUpperCase() + n.slice(1);
    return n;
  });
  return cleanNames;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
