import Book from './Book';

test('verify that title, author, and isbn are set correctly with named parameters', () => {
    const book = new Book({ title:'Pawn of Prophecy', author:'David Eddings', isbn:'9780393317507'});
    expect(book.title === 'Pawn of Prophecy').toBeTruthy();
    expect(book.author === 'David Eddings').toBeTruthy();
    expect(book.isbn === '9780393317507').toBeTruthy();
});

test('verify that isbn is not required', () => {
    const book = new Book({ title:'Pawn of Prophecy', author:'David Eddings'});
    expect(book.title === 'Pawn of Prophecy').toBeTruthy();
    expect(book.author === 'David Eddings').toBeTruthy();
});

test('verify that expected string is in fullText', () => {
    const book = new Book({ title:'Pawn of Prophecy', author:'David Eddings', isbn:'9780393317507'});
    console.log(book);
    console.log(book.fullText);
    expect(book.fullText.includes('Pawn of Prophecy')).toBeTruthy();
    expect(book.fullText.includes('David Eddings')).toBeTruthy();
    expect(book.fullText.includes('9780393317507')).toBeTruthy();
});

test('verify that pattern match works on fullText', () => {
    const book = new Book({ title:'Pawn of Prophecy', author:'David Eddings', isbn:'9780393317507'});
    expect(/Eddings/g.test(book.fullText)).toBeTruthy();
    expect(/Eddings/g.test(book.author)).toBeTruthy();
    expect(/Eddings/g.test(book.title)).toBeFalsy();
});

