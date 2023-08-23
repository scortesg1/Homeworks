class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const bookStack = new Stack();

const harryPotter = {
  name: "Harry Potter and the Sorcerer's Stone",
  isbn: 9780590353427,
  author: "J.K. Rowling",
  editorial: "Scholastic",
};

const toKillAMockingbird = {
  name: "To Kill a Mockingbird",
  isbn: 9780061120084,
  author: "Harper Lee",
  editorial: "Harper Perennial Modern Classics",
};

const lordOfTheRings = {
  name: "The Fellowship of the Ring",
  isbn: 9780547928210,
  author: "J.R.R. Tolkien",
  editorial: "Mariner Books",
};

const greatGatsby = {
  name: "The Great Gatsby",
  isbn: 9780743273565,
  author: "F. Scott Fitzgerald",
  editorial: "Scribner",
};

const prideAndPrejudice = {
  name: "Pride and Prejudice",
  isbn: 9780141439518,
  author: "Jane Austen",
  editorial: "Penguin Classics",
};

const catcherInTheRye = {
  name: "The Catcher in the Rye",
  isbn: 9780316769488,
  author: "J.D. Salinger",
  editorial: "Little, Brown and Company",
};

const book1984 = {
  name: "1984",
  isbn: 9780451524935,
  author: "George Orwell",
  editorial: "Signet Classics",
};

const braveNewWorld = {
  name: "Brave New World",
  isbn: 9780060850524,
  author: "Aldous Huxley",
  editorial: "Harper Perennial Modern Classics",
};

const countOfMonteCristo = {
  name: "The Count of Monte Cristo",
  isbn: 9780140449266,
  author: "Alexandre Dumas",
  editorial: "Penguin Classics",
};

const aliceInWonderland = {
  name: "Alice's Adventures in Wonderland",
  isbn: 9781509813607,
  author: "Lewis Carroll",
  editorial: "Macmillan Children's Books",
};

bookStack.push(harryPotter);
bookStack.push(toKillAMockingbird);
bookStack.push(lordOfTheRings);
bookStack.push(greatGatsby);
bookStack.push(prideAndPrejudice);
bookStack.push(catcherInTheRye);
bookStack.push(book1984);
bookStack.push(braveNewWorld);
bookStack.push(countOfMonteCristo);
bookStack.push(aliceInWonderland);

bookStack.print();
