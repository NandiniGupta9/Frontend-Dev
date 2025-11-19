class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("JavaScript Guide", "John", "101"),
  new Book("Python Basics", "Rahul", "102", true),
  new Book("HTML Mastery", "Sara", "103"),
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueBookByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book && !book.isIssued) {
    book.issueBook();
    console.log("Book issued:", book.title);
  } else {
    console.log("Book not available");
  }
}

issueBookByISBN("103");
