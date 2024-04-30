class Book {
    constructor({title, author, isbn='0000000000000'}) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }

    get fullText() {
        return this.title + this.author + this.isbn;
    }
}

export default Book;