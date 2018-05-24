'use strict';

// Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?

//Pass in two argument (library array and the book object we are looking for). then search on book.dewey and check length (if = 1 then you have your book), else search on auther acnd check length (if = 1 then you have your book), then search on title and if matches then yay.

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function search(library, book) {
  let booksMatch = library.filter(books => books.dewey === book.dewey);

  if (booksMatch.length === 1) {
    return booksMatch;
  } else if (booksMatch.length>1){
    let titleMatch = booksMatch.filter(titles => titles.title === book.title);
    if (titleMatch.length === 1 ) {
      return titleMatch;
    } else {
      let authorMatch = titleMatch.filter(authors => authors.author === book.author);
      return authorMatch;
    }
  } else {
    return `'${book.title}' not found`;
  }
}

console.log(search(library, { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' }));

console.log(search(library, { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' }));

console.log(search(library, { author: 'Sarah', dewey: '011.33', title: 'Soooo tired' }));
