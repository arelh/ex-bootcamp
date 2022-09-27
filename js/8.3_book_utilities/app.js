const myBook1 = {
  name: "Harry Potter and the Philosopher's Stone",
  author: "j.k.Rowling",
  year: "1997",
};

const myBook2 = {
  name: "Harry Potter and the Goblet of Fire",
  author: "j.k.Rowling",
  year: "2001",
};

const bookUtils = {
  getFirstPublishet(book1, book2) {
    if (book1.year > book2.year) {
      return book2;
    } else {
      return book1;
    }
  },

  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.languahe = language;
  },
  setTranslation(book, Language, translator) {
    book.translation = { Language, translator };
  },
  setPublisher(book, name, location) {
    book.namedPublisher = { name, location };
  },

  isSamePublisher(book1, book2) {
    if (book1.namedPublisher === book2.namedPublisher) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(bookUtils.getFirstPublishet(myBook1, myBook2));
console.log(bookUtils.setNewEdition(myBook1, 2010));
console.log(bookUtils.setLanguage(myBook1, `HEBREW`));
console.log(bookUtils.setTranslation(myBook1, `david cohen`, `france`));
console.log(bookUtils.setPublisher(myBook1, `shimon cohen`, `jerusalem`));

console.log(myBook1);

