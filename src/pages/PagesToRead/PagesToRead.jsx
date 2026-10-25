const readingData = [
    { title: 'The Great Gatsby', value: 192, color: '#2f7bdf' },
    { title: 'To kill a mocking bird', value: 281, color: '#1bba9c' },
    { title: '1984', value: 328, color: '#f3b326' },
    { title: 'The Alchemist', value: 177, color: '#f39b2d' },
    { title: 'Pride and prejudice', value: 279, color: '#e6413b' },
];

const PagesToRead = () => {
    return (
        <main className="pages-to-read-page">
            <section className="reading-chart-panel" aria-label="Books to read chart">
                <div className="reading-chart-grid" aria-hidden="true" />

                <div className="reading-chart">
                    {readingData.map((book) => (
                        <div key={book.title} className="reading-bar-group">
                            <span className="reading-value" style={{ color: book.color }}>
                                {book.value}
                            </span>
                            <div className="reading-bar-wrap">
                                <div
                                    className="reading-bar"
                                    style={{
                                        height: `${(book.value / 340) * 100}%`,
                                        background: book.color,
                                    }}
                                />
                            </div>
                            <span className="reading-label">{book.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default PagesToRead;