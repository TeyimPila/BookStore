export function selectBook(book) {
    // selectBook is an action is an ActionCreator and it needs
    // to return an action, which is an object with a typ property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

