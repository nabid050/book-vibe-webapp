const booksPromise = fetch('/booksData.json').then((response) => {
  if (!response.ok) {
    throw new Error(`Failed to load books: ${response.status}`);
  }

  return response.json();
});

export default booksPromise;
