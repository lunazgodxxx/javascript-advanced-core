class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  display() {
    console.log(
      `Title: ${this.title}\n\t Author: ${this.author}\n\t Year:   ${this.year}`
    );
  }
}

class EBook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  display() {
    console.log(
      `Title: ${this.title}\n\t Author: ${this.author}\n\t Year:   ${this.year}\n\t Price:  ${this.price}`
    );
  }
}

const myEbook = new EBook("The Alchemist", "Paulo Coelho", 1988, 59.99);
myEbook.display();
