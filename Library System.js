// Array to store books
let books = [];

// Function to add a new book
function addBook(title, author) {
  const newBook = {
    title: title,
    author: author,
    isBorrowed: false
  };
  books.push(newBook);
  console.log(`Book "${title}" by ${author} added to the library.`);
}

// Function to mark a book as borrowed
function borrowBook(title) {
  const book = books.find(book => book.title === title && !book.isBorrowed);
  if (book) {
    book.isBorrowed = true;
    console.log(`You have borrowed the book: "${title}".`);
  } else {
    console.log(`The book "${title}" is either borrowed or not available.`);
  }
}

// Function to mark a book as returned
function returnBook(title) {
  const book = books.find(book => book.title === title && book.isBorrowed);
  if (book) {
    book.isBorrowed = false;
    console.log(`You have returned the book: "${title}".`);
  } else {
    console.log(`The book "${title}" was not borrowed.`);
  }
}

//function to search books by title or author
function searchBooks(searchTerm, type) {
  let foundBooks;

  if (type === 'title') {
    foundBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  } else if (type === 'author') {
    foundBooks = books.filter(book => book.author.toLowerCase().includes(searchTerm.toLowerCase()));
  } else {
    console.log('Invalid search type. Please use "title" or "author".');
    return;
  }

  if (foundBooks.length > 0) {
    console.log(`Books found by ${type} "${searchTerm}":`);
    foundBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));
  } else {
    console.log(`No books found by ${type} "${searchTerm}".`);
  }
}

// Function to show a list of borrowed books
function showBorrowedBooks() {
  const borrowedBooks = books.filter(book => book.isBorrowed);
  if (borrowedBooks.length > 0) {
    console.log('List of borrowed books:');
    borrowedBooks.forEach(book => console.log(`- "${book.title}" by ${book.author}`));
  } else {
    console.log('No books are currently borrowed.');
  }
}
addBook('the psychology of money', 'Morgan House');
addBook('think and grow rich','Napoleon Hill');
addBook('1984', 'George Orwell');
addBook('To Kill a Mockingbird', 'Harper Lee');
addBook('Rich Dad and poor Dad','Robert Kiyosaki');

borrowBook('1984');  // Borrow "1984"
borrowBook('The Catcher in the Rye');  // Try to borrow a non-existent book
borrowBook('To Kill a Mockingbird');

searchBooks('1984', 'title');  // Search books by title
searchBooks('George Orwell', 'author');  // Search books by author
searchBooks('F. Scott', 'author');  // Search books by author
searchBooks('Robert Kiyosaki');

showBorrowedBooks();  // Show all borrowed books

returnBook('1984');  // Return "1984"
showBorrowedBooks();  // Show borrowed books again

