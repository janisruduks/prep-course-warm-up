export {};

interface Library {
  title: string,
  author: string,
  isRead: boolean
}

const library: Library[] = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];



const showStatus = (library: Library[]) => {
  library.forEach(book => { //used because for loop itterates through a keys and not the elements of array
    if(book.isRead) {
      console.log(`Already read '${book.title}' by ${book.author}`);
    }else {
      console.log(`You still need to read '${book.title}' by ${book.author}`);
    }
  })
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/