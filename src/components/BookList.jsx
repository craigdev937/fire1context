import React from "react";

export const BookList = ({ books }) => {
    const handleClick = async (id) => {
        console.log(id);
    };

    return (
        <React.Fragment>
            <section className="book__list">
                <ul>
                    {books.map((book) => (
                        <li 
                            key={book.id} 
                            onClick={() => handleClick(book.id)}
                        >
                            {book.title}
                        </li>
                    ))}
                </ul>
            </section>
        </React.Fragment>
    );
};


