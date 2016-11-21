// Action creator (needs to return an action)
export function selectBook(book) {
  // the action it returns is just an object with a type
  // and helpful data that describes more about the action taken (called a payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};